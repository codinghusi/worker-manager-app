
import { Form, Button, Modal } from 'react-bootstrap';
import ModeledControl, { useModel } from '../../helper/modeled-control';
import { createRef } from 'react';

const def = {
    data: {},
    onSave: () => console.error("please provide `onSave` for EditWorker"),
    onCancel: () => console.error("please provide a `onCancel` for EditWorker"),
    show: false,
}

export default function EditWorkerModal(props) {
    props = { ...def, ...props };
    const { data, onSave, onCancel, show } = props;

    const exists = !!data.id;

    // const nameModel = useModel();
    // const segmentModel = useModel();
    // const tlSectionModel = useModel();
    // const workAreaModel = useModel();

    const doSave = (form) => {
        const formData = new FormData(form);
        const objData = Object.fromEntries(formData.entries());
        const resultData = { ...data, ...objData };
        onSave(resultData);
    }

    const formRef = createRef();

    const Core = () => (
        <Form ref={formRef}>
            <Form.Group controlId="name">
                <Form.Label>Name des Mitarbeiters</Form.Label>
                <Form.Control type="text" placeholder="Name eingeben" name="name" value={data.name} />
            </Form.Group>

            <Form.Group controlId="segment">
                <Form.Label>Segment</Form.Label>
                <Form.Control type="text" placeholder="Segment eingeben" name="segment" />
            </Form.Group>

            <Form.Group controlId="tlSection">
                <Form.Label>TL - Bereich</Form.Label>
                <Form.Control type="text" placeholder="TL-Bereich eingeben" name="tlSection" />
            </Form.Group>

            <Form.Group controlId="workArea">
                <Form.Label>Arbeitsbereich</Form.Label>
                <Form.Control type="text" placeholder="Arbeitsbereich eingeben" name="workArea" />
            </Form.Group>
        </Form>
    );

    return (
        <Modal show={show} onHide={onCancel}>
            <Modal.Header closeButton>
                <Modal.Title>Mitarbeiter hinzufügen</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Core />
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" type="submit" onClick={() => doSave(formRef.current)}>
                    Speichern
                </Button>

                <Button variant="danger" onClick={onCancel}>
                    Abbrechen
                </Button>
            </Modal.Footer>
        </Modal>
    )
}