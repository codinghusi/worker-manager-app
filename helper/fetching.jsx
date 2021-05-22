import { useState } from 'react';
import { Message } from 'semantic-ui-react';
import { useGetWorkerQuery } from '../api/generated/graphql';
import Loading from '../components/loading';
import { useEffect } from 'react';

function FetchType({ request, field, loadingLabel, errorLabel, children }) {
    return (
        <Loading request={request} field={field}>
            <Loading.Description>
                {loadingLabel}
            </Loading.Description>

            <Loading.Success>
                {worker => children(worker)}
            </Loading.Success>

            <Loading.Error>
                {error => (
                    <Message variant="danger">
                        <Message.Header> Fehler </Message.Header>
                        <p>
                            {errorLabel}
                        </p>
                    </Message>
                )}
            </Loading.Error>
        </Loading>
    );
}


export function FetchWorker({ workerId, children }) {
    const request = useGetWorkerQuery({ variables: { id: workerId } });

    return (
        <FetchType request={request} field="getWorker" loadingLabel="Lade Mitarbeiter" errorLabel="Mitarbeiter konnte nicht gefunden werden!">
            {children}
        </FetchType>
    );
}


export function useMapRequest(request, predicate) {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(request.data?.map(predicate));
    }, [request.data]);

    return { ...request, data };
}