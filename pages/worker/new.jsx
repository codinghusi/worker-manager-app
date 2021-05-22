import Head from 'next/head';
import { AddWorkerForm } from './../../components/worker/worker-form';

export default function AddWorkerPage() {
    return (
        <>
            <Head>
                <title>Mitarbeiter erstellen</title>
            </Head>
            
            <>
                <h1>Neuen Mitarbeiter erstellen</h1>
                <AddWorkerForm />
            </>
        </>
    )
}