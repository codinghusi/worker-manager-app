import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAddWorkerMutation } from "../../../api/generated/graphql";
import WorkerForm from './base-form';

export default function AddWorkerForm({ }) {
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