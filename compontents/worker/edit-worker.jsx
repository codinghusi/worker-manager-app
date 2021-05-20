
import { Form, Button } from 'react-bootstrap';
import ModeledControl, { useModel } from '../../helper/modeled-control';

export default function EditWorker({ data }) {
    const exists = !!data;

    const nameModel = useModel();
    const segmentModel = useModel();
    const tlSectionModel = useModel();
    const workAreaModel = useModel();

    return (
        <Form>
            <Form.Group controlId="name">
                <Form.Label>Name des Mitarbeiters</Form.Label>
                <ModeledControl type="text" placeholder="Name eingeben" model={nameModel} />
            </Form.Group>

            <Form.Group controlId="segment">
                <Form.Label>Segment</Form.Label>
                <ModeledControl type="text" placeholder="Segment eingeben" model={segmentModel} />
            </Form.Group>

            <Form.Group controlId="tlSection">
                <Form.Label>TL - Bereich</Form.Label>
                <ModeledControl type="text" placeholder="TL-Bereich eingeben" model={tlSectionModel} />
            </Form.Group>

            <Form.Group controlId="workArea">
                <Form.Label>Arbeitsbereich</Form.Label>
                <ModeledControl type="text" placeholder="Arbeitsbereich eingeben" model={workAreaModel} />
            </Form.Group>

            
            <Button variant="primary" type="submit">
                Speichern
            </Button>

            <Button variant="secondary" type="submit">
                Speichern und nochmal
            </Button>

            <Button variant="danger">
                Abbrechen
            </Button>
        </Form>
    )
}