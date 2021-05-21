import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

export function useConfirm() {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ status, setStatus ] = useState(null);

    useEffect(() => {
        if (isOpen) {
            setStatus(null);
        }
    }, [isOpen]);

    return {
        open() {
            setIsOpen(true)
        },
        close(hasConfirmed) {
            setIsOpen(false);
            setStatus(hasConfirmed);
        },
        isOpen,
        status
    }
}

const defaultProps = {
    yesLabel: "Ja",
    noLabel: "Abbrechen"
}

export default function ConfirmModal(props) {
    props = { ...defaultProps, ...props };
    const { handler, children, title, yesLabel, noLabel } = props;

    return (
        <Modal show={handler.isOpen} onHide={() => handler.close('rejected')}>
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {children}
            </Modal.Body>

            <Modal.Footer>
                <Button variant="primary" onClick={() => handler.close('confirmed')}> {yesLabel} </Button>
                <Button variant="danger" onClick={() => handler.close('rejected')}> {noLabel} </Button>
            </Modal.Footer>
        </Modal>
    )
}