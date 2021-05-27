import { createContext, useState } from 'react';
import { Message } from 'semantic-ui-react';
import { useCheckWorkerNameAvailableLazyQuery, useGetWorkerQuery } from '../api/generated/graphql';
import Loading from '../components/loading';
import { useEffect } from 'react';

export function createStep(data) {
    return {
        name: '',
        machineDuration: '',
        workDuration: '',
        walkDuration: '',
        ...data
    };
}

function FetchType({ request, field, loadingLabel, errorLabel, notFoundLabel, children }) {
    return (
        <Loading request={request} field={field}>
            <Loading.Description>
                {loadingLabel}
            </Loading.Description>

            <Loading.Success>
                {worker => children(worker)}
            </Loading.Success>

            <Loading.Error type="not-found">
                {error => (
                    <Message variant="danger">
                        <Message.Header> Fehler </Message.Header>
                        <p>
                            {notFoundLabel}
                        </p>
                    </Message>
                )}
            </Loading.Error>

            <Loading.Error type="default">
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

export const WorkerContext = createContext(null);

export function ProvideWorker({ workerId, children }) {
    const apiRequest = useGetWorkerQuery({ variables: { id: workerId } });
    const request = useMiddlewareRequest(apiRequest, ({ getWorker: data }) => data && ({
        ...data,
        tlSection: data.tlSection.value,
        segment: data.segment.value,
        workArea: data.workArea.value,
    }));

    return (
        <FetchType
            request={request}
            loadingLabel="Lade Mitarbeiter"
            errorLabel="Es ist ein Fehler aufgetreten. Versuche es später erneut."
            notFoundLabel="Mitarbeiter konnte nicht gefunden werden."
        >
            {data => (
                <WorkerContext.Provider value={{ data, refetch: request.refetch }}>
                    {children}
                </WorkerContext.Provider>
            )}
        </FetchType>
    )
}


export function FetchWorker({ workerId, children }) {
    const apiRequest = useGetWorkerQuery({ variables: { id: workerId } });
    const request = useMiddlewareRequest(apiRequest, ({ getWorker: data }) => data && ({
        getWorker: {
            id: data.id,
            name: data.name,
            tlSection: data.tlSection.value,
            segment: data.segment.value,
            workArea: data.workArea.value
        }
    }));

    return (
        <FetchType request={request}
            field="getWorker"
            loadingLabel="Lade Mitarbeiter"
            errorLabel="Es ist ein Fehler aufgetreten. Versuche es später erneut."
            notFoundLabel="Mitarbeiter konnte nicht gefunden werden."
        >
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

export function useWorkerNameAvailable() {
    const [run, request] = useCheckWorkerNameAvailableLazyQuery();
    const [ isAvailable, setIsAvailable ] = useState(true);

    useEffect(() => {
        if (request.data?.getWorker) {
            setIsAvailable(false);
        } else {
            setIsAvailable(true);
        }
    }, [request.data]);

    return [ run, {
        ...request,
        isNameAvailable: isAvailable
    }];
}
