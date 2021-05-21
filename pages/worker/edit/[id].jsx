import { useRouter } from 'next/router';
import Head from 'next/head';
import WorkerForm from '../../../components/worker/worker-form';

export default function EditWorkerPage() {
    const router = useRouter();
    const { id } = router.query;

    const onSubmit = (worker) => {

    };

    const data = { id, name: "Gerrit Weiermann" };

    return (
        <>
            <Head>
                <title>Mitarbeiter bearbeiten</title>
            </Head>

            <h1>Mitarbeiter bearbeiten</h1>
            <WorkerForm onSubmit={onSubmit} data={data} buttonLabel="Speichern" />
        </>
    )
}