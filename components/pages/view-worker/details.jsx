import { Segment } from 'semantic-ui-react';
import { EditWorkerForm } from '../../worker/worker-form';

export default function TabDetails({ data }) {
    return (
        <Segment>
            <EditWorkerForm />
        </Segment>
    );
}