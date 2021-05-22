import { Form, Button } from 'semantic-ui-react';
import { useUpdateWorkerMutation, useAddWorkerMutation } from '../../api/generated/graphql';
import { FetchWorker } from '../../helper/fetching'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export function AddWorkerForm({ }) {
    const router = useRouter();

    const [ addWorker, { data, error, loading }] = useAddWorkerMutation();

    useEffect(() => {
        router.push(`/worker/view/${request.data.updateWorker.worker.id}`);
    }, [request.data])

    const onSubmit = (data) => {
        addWorker({ variables: { data } });
        return loading;
    }

    return <WorkerForm onSubmit={onSubmit} data={{}} />;
}

export function EditWorkerForm({ workerId }) {
    const onSubmit = (data) => {
        // return useUpdateWorkerMutation({ variables: { id: workerId, data }});
    }

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
        const data = Object.fromEntries(formData.entries());

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
                    value={data.name}
                />
            </Form.Field>

            <Form.Field>
                <label>Segment</label>
                <input
                    placeholder="Segment eingeben"
                    name="segment"
                    value={data.segment}
                />
            </Form.Field>

            <Form.Field>
                <label>TL - Bereich</label>
                <input
                    placeholder="Bereich eingeben"
                    name="tlSection"
                    value={data.tlSection}
                />
            </Form.Field>

            <Form.Field>
                <label>Arbeitsbereich</label>
                <input
                    placeholder="Arbeitsbereich eingeben"
                    name="workArea"
                    value={data.workArea}
                />
            </Form.Field>

            <Button type="submit" loading={submitLoading} primary>
                {data.id ? "Speichern" : "Erstellen"}
            </Button>
            
        </Form>
    );
}