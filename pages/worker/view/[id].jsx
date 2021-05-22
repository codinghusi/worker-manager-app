import { useRouter } from 'next/router';
import Head from 'next/head';
import { Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { BiBrain, BiWindowAlt } from 'react-icons/bi';
import IconWithText from '../../../helper/icon-with-text';

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


function WorkerDetails({ data }) {
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

function WorkerSteps({ data }) {
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

    const core = (data) => (
        <>
            <Head>
                <title>Mitarbeiter</title>
            </Head>

            <>
                <h1>Mitarbeiter {data.name} </h1>
                
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