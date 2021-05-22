import { Form, Button } from 'react-bootstrap';
import { useUpdateWorkerMutation, useAddWorkerMutation } from '../../api/generated/graphql';
import { FetchWorker } from '../../helper/fetching'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export function AddWorkerForm({ }) {
    const router = useRouter();

    const onSubmit = (data) => {
        // const request = useAddWorkerMutation({ variables: { data }});
        // useEffect(() => {
        //     router.push(`/worker/view/${request.data.updateWorker.worker.id}`);
        // }, [request.data])
    }

    return <WorkerForm onSubmit={onSubmit} data={{}} />;
}

export function EditWorkerForm({ workerId }) {
    const onSubmit = (data) => {
        // return useUpdateWorkerMutation({ variables: { id: workerId, data }});
    }

    return (
        <FetchWorker workerId={workerId}>
            {worker => <WorkerForm onSubmit={onSubmit} data={worker} />}
        </FetchWorker>
    );
}

export function WorkerForm({ onSubmit, data }) {
    const handleSubmit = (e) => {
        // gathering up data
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // sending data
        onSubmit(data);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
                <Form.Label>Name des Mitarbeiters</Form.Label>
                <Form.Control type="text" placeholder="Name eingeben" name="name" value={data.name} />
            </Form.Group>

            <Form.Group controlId="segment">
                <Form.Label>Segment</Form.Label>
                <Form.Control type="text" placeholder="Segment eingeben" name="segment" value={data.segment} />
            </Form.Group>

            <Form.Group controlId="tlSection">
                <Form.Label>TL - Bereich</Form.Label>
                <Form.Control type="text" placeholder="TL-Bereich eingeben" name="tlSection" value={data.tlSection} />
            </Form.Group>

            <Form.Group controlId="workArea">
                <Form.Label>Arbeitsbereich</Form.Label>
                <Form.Control type="text" placeholder="Arbeitsbereich eingeben" name="workArea" value={data.workArea} />
            </Form.Group>

            {data.id && (
                <Button type="submit" variant="primary">
                    Speichern
                </Button>
            ) || (
                <Button type="submit" variant="primary">
                    Erstellen
                </Button>
            )}
            
        </Form>
    );
}