import { useRouter } from 'next/router';
import Head from 'next/head';
import WorkerForm from '../../../components/worker/worker-form';
import { WorkerProvider } from '../../../components/worker/worker-provider';

export default function EditWorkerPage() {
    const router = useRouter();
    const { id } = router.query;

    const onSubmit = (worker) => {

    };

    return (
        <WorkerProvider workerId={id}>
            <Head>
                <title>Mitarbeiter bearbeiten</title>
            </Head>

            <h1>Mitarbeiter bearbeiten</h1>
            <WorkerForm onSubmit={onSubmit} />
        </WorkerProvider>
    )
}