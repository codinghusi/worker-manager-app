import { useEffect } from 'react';
import { Form } from 'semantic-ui-react';
import useFormControl from '../../../helper/form-control';

export default function WorkstepForm({ step, onChange }) {
    const { values, useFieldControl } = useFormControl(step);

    useEffect(() => {
        onChange({
            ...step,
            ...values
        });
    }, [values])

    return (
        <Form>
            <Form.Input label="Name" {...useFieldControl("name")} />
            <Form.Group widths="equal">
                <Form.Input label="Maschinendauer" {...useFieldControl("machineDuration")} />
                <Form.Input label="Arbeitsdauer" {...useFieldControl("workDuration")} />
                <Form.Input label="Laufweg" {...useFieldControl("walkDuration")} />
            </Form.Group>
        </Form>
    );
}