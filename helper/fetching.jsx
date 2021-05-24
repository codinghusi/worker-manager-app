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
                {error => console.error(error) || (
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
    const apiRequest = useGetWorkerQuery({ variables: { id: workerId } });
    const request = useMiddlewareRequest(apiRequest, ({ getWorker: data }) => ({
        getWorker: {
            id: data.id,
            name: data.name,
            tlSection: data.tlSection.value,
            segment: data.segment.value,
            workArea: data.workArea.value
        }
    }));

    useEffect(() => {
        console.log("request data", request.data);
    }, [request.data]);

    return (
        <FetchType request={request} field="getWorker" loadingLabel="Lade Mitarbeiter" errorLabel="Mitarbeiter konnte nicht gefunden werden!">
            {children}
        </FetchType>
    );
}

export function useMiddlewareRequest(request, predicate) {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (request.data) {
            setData(predicate(request.data));
        }
    }, [request.data]);

    return { ...request, data };
}


export function useMapRequest(request, fieldname, predicate) {
    return useMiddlewareRequest(request, data => data[fieldname].map(predicate));
}