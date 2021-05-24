import { Form, Button, Message } from 'semantic-ui-react';
import { useUpdateWorkerMutation, useAddWorkerMutation, useCheckWorkerNameAvailableLazyQuery } from '../../api/generated/graphql';
import { FetchWorker, useWorkerNameAvailable } from '../../helper/fetching'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import FieldError from '../field-error';

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

export function EditWorkerForm({ workerId }) {
    const router = useRouter();
    const [ updateWorker, { data, error, loading }] = useUpdateWorkerMutation();

    const onSubmit = (data) => {
        delete data.name; // is readonly, cant be updated

        updateWorker({ variables: { id: workerId, data } });
        return loading;
    }

    useEffect(() => {
        if (data?.updateWorker?.worker?.length) {
            router.push(`/worker/view/${workerId}`);
        }
    }, [data]);

    useEffect(() => {
        if (error) {
            console.log("error while updating worker", error);
        }
    }, [error]);

    return (
        <FetchWorker workerId={workerId}>
            {worker => <WorkerForm onSubmit={onSubmit} data={worker} />}
        </FetchWorker>
    );
}

export function WorkerForm({ onSubmit, data }) {
    const [ submitLoading, setSubmitLoading ] = useState(false);
    const [ checkName, { loading: isCheckingName, isNameAvailable } ] = useWorkerNameAvailable();
    const [ hasErrors, setHasErrors ] = useState(false);

    useEffect(() => {
        setHasErrors(!isNameAvailable);
    }, [isNameAvailable])

    const checkingErrors = isCheckingName;


    const handleSubmit = (e) => {
        // gathering up data
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const rawData = Object.fromEntries(formData.entries());
        const data = {
            name: rawData.name,
            tlSection: { value: rawData.tlSection },
            segment: { value: rawData.segment },
            workArea: { value: rawData.workArea },
        }

        // sending data
        const loading = onSubmit(data);
        setSubmitLoading(loading);
    };

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

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Input
                required
                label="Name"
                placeholder="Name eingeben"
                name="name"
                defaultValue={data.name}
                readOnly={!!data.id}
                disabled={!!data.id}
                
                onBlur={onNameChange}
                error={!isNameAvailable && errors.nameNotAvailable}
                loading={isCheckingName}
            />

            <Form.Field required>
                <label>Segment</label>
                <input
                    placeholder="Segment eingeben"
                    name="segment"
                    defaultValue={data.segment}
                    onChange={onChange}
                />
            </Form.Field>

            <Form.Field required>
                <label>TL - Bereich</label>
                <input
                    placeholder="Bereich eingeben"
                    name="tlSection"
                    defaultValue={data.tlSection}
                    onChange={onChange}
                />
            </Form.Field>

            <Form.Field required>
                <label>Arbeitsbereich</label>
                <input
                    placeholder="Arbeitsbereich eingeben"
                    name="workArea"
                    defaultValue={data.workArea}
                    onChange={onChange}
                />
            </Form.Field>

            <Button type="submit" loading={submitLoading || checkingErrors} primary disabled={hasErrors || checkingErrors}>
                {data.id ? "Speichern" : "Erstellen"}
            </Button>
            
        </Form>
    );
}