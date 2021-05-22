import { useRouter } from 'next/router';
import Head from 'next/head';
import { Row, Col, Card, Badge, Button, Alert } from 'react-bootstrap';
import { BiBrain, BiWindowAlt } from 'react-icons/bi';
import IconWithText from '../../../helper/icon-with-text';
import Loading from '../../../components/loading';
import { useWorkerQuery } from '../../../api/generated/graphql';
import { WorkerContext, WorkerProvider } from '../../../components/worker/worker-provider';
import { useContext } from 'react';

function SmallInfo({ children, name }) {
    return (
        <Col>
            <Row>
                <Badge variant="primary">{name}</Badge>
            </Row>

            <Row>
                {children}
            </Row>
        </Col>
    );
}


function WorkerDetails() {
    const data = useContext(WorkerContext);

    return (
        <Card>
            <Card.Header>
                Details
            </Card.Header>
        
            <Card.Body>
                <Card.Text>
                    <Row>
                        <SmallInfo name="Segment">
                            <IconWithText>
                                <BiBrain />
                                {data.segment}
                            </IconWithText>
                        </SmallInfo>
                    
                        <SmallInfo name="TL-Bereich">
                            <IconWithText>
                                <BiBrain />
                                {data.tlSection}
                            </IconWithText>
                        </SmallInfo>
                    
                        <SmallInfo name="Arbeitsbereich">
                            <IconWithText>
                                <BiWindowAlt />
                                {data.workArea}
                            </IconWithText>
                        </SmallInfo>
                    </Row>

                    <Button variant="success" href={`/worker/edit/${data.id}`}>Bearbeiten</Button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

function WorkerSteps() {
    const data = useContext(WorkerContext);

    return (
        <Card>
            <Card.Header>
                Arbeitsschritte
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    {data.name} hat noch keine Arbeitsschritte zugewiesen bekommen
                </Card.Text>

                <Button variant="primary" href="">Arbeitsschritte zuweisen</Button>
            </Card.Body>
        </Card>
    );
}

export default function ViewWorkerPage() {
    const router = useRouter();
    const { id } = router.query;

    const data = useContext(WorkerContext);

    const core = (data) => (
        <>
            <Head>
                <title>Mitarbeiter</title>
            </Head>

            <div>
                <h1>Mitarbeiter {data.name} </h1>
                
                <WorkerDetails />
                <WorkerSteps />
                
            </div>
        </>
    );

    return (
        <WorkerProvider workerId={id}>
            {core}
        </WorkerProvider>
    )
}