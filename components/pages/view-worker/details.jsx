import { Segment } from 'semantic-ui-react';
import { EditWorkerForm } from '../../worker/worker-forms';

export default function TabDetails({ data }) {
    return (
        <Segment>
            <EditWorkerForm />
        </Segment>
    );
}