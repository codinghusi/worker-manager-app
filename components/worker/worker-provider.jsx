import { createContext } from 'react';
import { useWorkerQuery } from './../../api/generated/graphql';
import Loading from './../loading';
import { Alert } from 'react-bootstrap';

export const WorkerContext = createContext({});

export function WorkerProvider({ workerId, children }) {
    const request = useWorkerQuery({ variables: { id: workerId } });
    return (
        <Loading request={request} field="getWorker">
            <Loading.Description>
                Lade Mitarbeiter...
            </Loading.Description>

            <Loading.Success>
                {worker => (
                    <WorkerContext.Provider value={worker}>
                        {typeof(children) === 'function' ? children(worker) : children}
                    </WorkerContext.Provider>
                )}
            </Loading.Success>

            <Loading.Error>
                {error => <Alert variant="danger">Mitarbeiter konnte nicht gefunden werden!</Alert>}
            </Loading.Error>
        </Loading>
    );
}