import { useContext } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import Loading from '../loading';
import { useWorkerQuery } from './../../api/generated/graphql';
import { WorkerContext } from './worker-provider';

export default function WorkerForm({ onSubmit, id }) {
    const handleSubmit = (e) => {
        // gathering up data
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // sending data
        onSubmit(data);
    };

    const data = useContext(WorkerContext);

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