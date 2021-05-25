import { useContext, useEffect, useState } from 'react';
import { useUpdateWorkerMutation } from '../../../api/generated/graphql';
import WorkerForm from './base-form';
import { WorkerContext } from '../../../helper/fetching';
import { toast } from 'react-semantic-toasts';
import { objectHasItemsAs } from '../../../helper/data-check';

export default function EditWorkerForm() {
    const [ updateWorker, { error, data, loading }] = useUpdateWorkerMutation();
    const workerContext = useContext(WorkerContext);
    const [ mutatedData, setMutatedData ] = useState();

    const onSubmit = (data) => {
        delete data.name; // is readonly, cant be updated
        
        setMutatedData(data);
        updateWorker({ variables: { id: workerContext.data.id, data } });
        return loading;
    }

    useEffect(() => {
        if (error) {
            toast({
                title: "Fehler beim Speichern",
                description: (
                    <div>
                        <p>
                            Deine Änderungen wurden nicht übernommen. <br />
                            Versuche es später erneut.
                        </p>
                    </div>
                ),
                type: "error"
            })
        }
    }, [error]);

    useEffect(() => {
        const worker = data?.updateWorker?.worker?.[0];
        if (!loading && worker && mutatedData && worker?.id === workerContext?.data.id && objectHasItemsAs(mutatedData, worker)) {
            toast({
                title: "Speichern erfolgreich",
                description: "Deine Änderungen wurden übernommen.",
                type: "success"
            });
            workerContext.refetch();
            setMutatedData(null); // so it won't trigger multiple times
        }
    }, [data]);

    return (
        <WorkerForm onSubmit={onSubmit} data={workerContext.data} />
    );
}