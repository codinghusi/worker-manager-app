
import WorkerForm from './../../components/worker/worker-form';

export default function AddWorkerPage() {
    const onSubmit = (worker) => {
        console.log("added worker", worker);
    }

    const data = {};

    return (
        <WorkerForm onSubmit={onSubmit} data={data} buttonLabel="Erstellen" />
    )
}