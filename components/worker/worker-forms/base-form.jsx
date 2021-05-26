import { Form, Button } from 'semantic-ui-react';
import { useWorkerNameAvailable } from '../../../helper/fetching'
import { useEffect, useState } from 'react';
import { useGetWorkerFieldsAutocompleteQuery } from '../../../api/generated/graphql';
import useFormControl from '../../../helper/form-control';
import Autocomplete from '../../form/autocomplete';
import { useWrap } from '../../../helper/hooks';

export default function WorkerForm({ onSubmit, data, submitting }) {
    const [ checkName, { loading: isCheckingName, isNameAvailable } ] = useWorkerNameAvailable();
    const [ hasErrors, setHasErrors ] = useState(false);

    // Errors and validation
    useEffect(() => {
        setHasErrors(!isNameAvailable);
    }, [isNameAvailable])

    const checkingErrors = isCheckingName;
    
    const onNameChange = (e) => {
        const value = e.target.value;
        if (value.length < 3) {
            return;
        }
        checkName({ variables: { name: value } });
    }

    const errors = {
        nameNotAvailable: { content: "Dieser Name ist bereits vergeben", pointing: "below" }
    };

    // autocomplete
    const { loading: autocompleteLoading, data: autocompleteData } = useGetWorkerFieldsAutocompleteQuery();

    // ...
    const { values: formData, useFieldControl, useAutocompleteControl } = useFormControl(data);

    const handleSubmit = (e) => {
        // gathering up data
        e.preventDefault();
        const apiData = {
            name: formData.name,
            tlSection: { value: formData.tlSection },
            segment: { value: formData.segment },
            workArea: { value: formData.workArea },
        }

        // sending data
        onSubmit(apiData);
    };

    const autocompleteProps = (name) => {
        const options = useWrap(autocompleteData, () => autocompleteData?.[`queryWorker_${name}`].map(({ value }) => ({ value: value, text: value })));
        return {
            ...useAutocompleteControl(name),
            options,
            loading: autocompleteLoading
        };
    }

    return (
        <Form onSubmit={handleSubmit} loading={submitting || checkingErrors}>
            <Form.Input
                required
                label="Name"
                placeholder="Name eingeben"
                readOnly={!!data.id}
                disabled={!!data.id}
                
                onBlur={onNameChange}
                error={!isNameAvailable && errors.nameNotAvailable}
                loading={isCheckingName}

                {...useFieldControl("name")}
            />

            <Autocomplete
                placeholder="Segment eingeben"
                label="Segment"
                {...autocompleteProps("segment")}
            />

            <Autocomplete
                placeholder="TL-Bereich eingeben"
                label="TL - Bereich"
                {...autocompleteProps("tlSection")}
            />

            <Autocomplete
                placeholder="Arbeitsbereich eingeben"
                label="Arbeitsbereich"
                {...autocompleteProps("workArea")}
            />

            <Button type="submit" primary loading={submitting || checkingErrors} disabled={hasErrors || checkingErrors || submitting}>
                {data.id ? "Speichern" : "Erstellen"}
            </Button>
            
        </Form>
    );
}