import Head from 'next/head';
import { Col } from 'react-bootstrap';
import WorkerForm from './../../components/worker/worker-form';

export default function AddWorkerPage() {
    const onSubmit = (worker) => {
        console.log("added worker", worker);
    }

    const data = {};

    return (
        <>
            <Head>
                <title>Mitarbeiter erstellen</title>
            </Head>
            
            <Col>
                <h1>Neuen Mitarbeiter erstellen</h1>
                <WorkerForm onSubmit={onSubmit} data={data} buttonLabel="Erstellen" />
            </Col>
        </>
    )
}