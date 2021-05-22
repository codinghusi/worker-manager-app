import { useRouter } from 'next/router';
import Head from 'next/head';
import { Card, Button, List, Header } from 'semantic-ui-react';
import { FetchWorker } from './../../../helper/fetching';

function WorkerDetails({ data }) {
    return (
        <Card>        
            <Card.Content>
                <Card.Header> Details </Card.Header>
                
                <Card.Meta>
                    <span> {data.name} </span>
                </Card.Meta>

                <Card.Description>
                    <List>
                        <List.Item> Segment: {data.segment} </List.Item>
                        <List.Item> TL-Bereich: {data.tlSection} </List.Item>
                        <List.Item> Arbeitsbereich: {data.workArea} </List.Item>
                    </List>
                </Card.Description>
            </Card.Content>

            <Card.Content extra>
                <Button href={`/worker/edit/${data.id}`} primary>Bearbeiten</Button>
            </Card.Content>
        </Card>
    );
}

function WorkerSteps({ data }) {
    return (
        <Card>
            <Card.Content>
                <Card.Header>
                    Arbeitsschritte
                </Card.Header>

                <Card.Description>
                    Es wurden noch keine Arbeitsschritte zugewiesen
                </Card.Description>
            </Card.Content>

            <Card.Content extra>
                <Button primary>
                    Arbeitsschritte zuweisen
                </Button>
            </Card.Content>
        </Card>
    );
}

export default function ViewWorkerPage() {
    const router = useRouter();
    const { id } = router.query;

    const core = (data) => (
        <>
            <Head>
                <title>Mitarbeiter</title>
            </Head>

            <>
                <Header as="h1">Mitarbeiter {data.name} </Header>
                
                <WorkerDetails data={data} />
                <WorkerSteps data={data} />
            </>
        </>
    );

    return (
        <FetchWorker workerId={id}>
            {core}
        </FetchWorker>
    )
}