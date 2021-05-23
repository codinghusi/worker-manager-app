import { Form, Button } from 'semantic-ui-react';
import { useUpdateWorkerMutation, useAddWorkerMutation, UpdateWorkerDocument } from '../../api/generated/graphql';
import { FetchWorker } from '../../helper/fetching'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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

    const handleSubmit = (e) => {
        // gathering up data
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const rawData = Object.fromEntries(formData.entries());
        // const data = {
        //     name: rawData.name,
        //     tlSection: { value: rawData.tlSection },
        //     segment: { value: rawData.segment },
        //     workArea: { value: rawData.workArea },
        // }
        const data = rawData;

        console.log("data:", data);

        // sending data
        const loading = onSubmit(data);
        setSubmitLoading(loading);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Field>
                <label>Name des Mitarbeiters</label>
                <input
                    placeholder="Name eingeben"
                    name="name"
                    defaultValue={data.name}
                    readOnly={!!data.id}
                    disabled={!!data.id}
                />
            </Form.Field>

            <Form.Field>
                <label>Segment</label>
                <input
                    placeholder="Segment eingeben"
                    name="segment"
                    defaultValue={data.segment}
                />
            </Form.Field>

            <Form.Field>
                <label>TL - Bereich</label>
                <input
                    placeholder="Bereich eingeben"
                    name="tlSection"
                    defaultValue={data.tlSection}
                />
            </Form.Field>

            <Form.Field>
                <label>Arbeitsbereich</label>
                <input
                    placeholder="Arbeitsbereich eingeben"
                    name="workArea"
                    defaultValue={data.workArea}
                />
            </Form.Field>

            <Button type="submit" loading={submitLoading} primary>
                {data.id ? "Speichern" : "Erstellen"}
            </Button>
            
        </Form>
    );
}