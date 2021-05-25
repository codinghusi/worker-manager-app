import { Form, Button } from 'semantic-ui-react';
import { useUpdateWorkerMutation, useAddWorkerMutation } from '../../api/generated/graphql';
import { WorkerContext, useWorkerNameAvailable } from '../../helper/fetching'
import { useContext, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useGetWorkerFieldsAutocompleteQuery } from './../../api/generated/graphql';

export function AddWorkerForm({ }) {
    const router = useRouter();

    const [ addWorker, { data, error, loading }] = useAddWorkerMutation();

    useEffect(() => {
        const worker = data?.addWorker?.worker;
        if (worker && worker.length) {
            router.push(`/worker/view/${worker[0].id}`);
        }
    }, [data]);

    useEffect(() => {
        if (error) {
            console.log("error while adding worker", error);
        }
    }, [error]);

    const onSubmit = (data) => {
        addWorker({ variables: { data } });
        return loading;
    }

    return <WorkerForm onSubmit={onSubmit} data={{}} />;
}

export function EditWorkerForm() {
    const [ updateWorker, { error, loading }] = useUpdateWorkerMutation();
    const workerContext = useContext(WorkerContext);

    const onSubmit = (data) => {
        delete data.name; // is readonly, cant be updated

        updateWorker({ variables: { id: workerContext.data.id, data } });
        workerContext.refetch();

        return loading;
    }

    useEffect(() => {
        if (error) {
            console.log("error while updating worker", error);
        }
    }, [error]);

    return (
        <WorkerForm onSubmit={onSubmit} data={workerContext.data} />
    );
}

export function WorkerForm({ onSubmit, data }) {
    const [ checkName, { loading: isCheckingName, isNameAvailable } ] = useWorkerNameAvailable();
    const [ submitLoading, setSubmitLoading ] = useState(false);
    const [ hasErrors, setHasErrors ] = useState(false);

    // Errors and validation
    useEffect(() => {
        setHasErrors(!isNameAvailable);
    }, [isNameAvailable])

    const checkingErrors = isCheckingName;
    
    const onChange = event => {
        // validation
        const validations = {
            name(e, value) {

            }
        }
    }

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
    const [ autocomplete, setAutocomplete ] = useState({});
    const [ options, setOptions ] = useState(autocomplete);
    
    useEffect(() => {
        const mapValues = ({ value }) => ({ value: value, text: value });

        if (autocompleteData) {
            const values = {
                tlSection: autocompleteData.queryWorker_tlSection.map(mapValues),
                segment: autocompleteData.queryWorker_segment.map(mapValues),
                workArea: autocompleteData.queryWorker_workArea.map(mapValues),
            };
            setAutocomplete(values);
            setOptions(values);
            console.log("options", values);
        }
    }, [autocompleteData]);

    const Autocomplete = ({ name, placeholder, label, onChange }) => {
        const handleOnChange = (event, { value }) => {
            setFormData({
                ...formData,
                [name]: value
            });
        }

        const handleOnBlur = (event) => {
            // onChange?.(name, value);
        }

        const handleNewItem = (e, { value }) => {
            const item = { text: value, value };
            setOptions({
                ...options,
                [name]: [ item, ...autocomplete[name] ]
            });
        }

        return (
            <Form.Field name={name}>
                <Form.Dropdown
                    required
                    fluid
                    selection
                    search
                    // selectOnBlur={false}
                    noResultsMessage={null}
                    allowAdditions
                    additionLabel="Neu: "
                    {...{label, placeholder, name}}

                    options={options[name] ?? []}
                    loading={autocompleteLoading}

                    value={formData[name]}
                    onChange={handleOnChange}

                    // searchQuery={value}
                    // onSearchChange={handleSearchChange}
                    onBlur={handleOnBlur}
                    onAddItem={handleNewItem}
                />
            </Form.Field>
        );
    }

    // ...
    const [ formData, setFormData ] = useState(data);

    const handleDataChange = (fieldName, value) => setFormData({
        ...formData.current,
        [fieldName]: value
    });

    const handleSubmit = (e) => {
        // gathering up data
        e.preventDefault();
        data = { ...data, ...formData };
        const apiData = {
            name: data.name,
            tlSection: { value: data.tlSection },
            segment: { value: data.segment },
            workArea: { value: data.workArea },
        }

        console.log(formData, apiData);
        console.log(new FormData(e.target));

        // sending data
        const loading = onSubmit(apiData);
        setSubmitLoading(loading);
    };

    

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Input
                required
                label="Name"
                placeholder="Name eingeben"
                name="name"
                defaultValue={formData.name}
                readOnly={!!data.id}
                disabled={!!data.id}
                
                onBlur={onNameChange}
                error={!isNameAvailable && errors.nameNotAvailable}
                loading={isCheckingName}
                onChange={e => handleDataChange("name", e.target.value)}
            />

            <Autocomplete
                placeholder="Segment eingeben"
                name="segment"
                label="Segment"
                defaultValue={formData.segment}
                onChange={handleDataChange} />

            <Autocomplete
                placeholder="TL-Bereich eingeben"
                name="tlSection"
                label="TL - Bereich"
                defaultValue={formData.tlSection}
                onChange={handleDataChange} />

            <Autocomplete
                placeholder="Arbeitsbereich eingeben"
                name="workArea"
                label="Arbeitsbereich"
                defaultValue={formData.workArea}
                onChange={handleDataChange} />

            <Button type="submit" loading={submitLoading || checkingErrors} primary disabled={hasErrors || checkingErrors}>
                {data.id ? "Speichern" : "Erstellen"}
            </Button>
            
        </Form>
    );
}