import { useGetWorkerQuery } from '../api/generated/graphql';
import Loading from '../components/loading';
import { Alert } from 'react-bootstrap';

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
                {error => <Alert variant="danger">{errorLabel}</Alert>}
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