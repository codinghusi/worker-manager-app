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
            console.error("error while adding worker", error);
            toast({
                title: "Fehler beim Erstellen des Mitarbeiters",
                description: (
                    <div>
                        <p>
                            Der Mitarbeiter konnte nicht erstellt werden. <br />
                            Versuche es später nochmal erneut.
                        </p>
                    </div>
                ),
                type: "error"
            })
        }
    }, [error]);

    const onSubmit = (data) => {
        addWorker({ variables: { data } });
        return loading;
    }

    return <WorkerForm onSubmit={onSubmit} data={{}} />;
}