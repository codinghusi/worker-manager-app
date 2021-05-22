import { useRouter } from 'next/router';
import Head from 'next/head';
import { EditWorkerForm } from '../../../components/worker/worker-form';

export default function EditWorkerPage() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <Head>
                <title>Mitarbeiter bearbeiten</title>
            </Head>

            <h1>Mitarbeiter bearbeiten</h1>
            <EditWorkerForm workerId={id}/>
        </div>
    )
}