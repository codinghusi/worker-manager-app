import { Form, Button } from 'react-bootstrap';

export default function WorkerForm({ onSubmit, data, buttonLabel }) {
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

            <Button type="submit" variant="primary">
                {buttonLabel}
            </Button>
        </Form>
    );
}