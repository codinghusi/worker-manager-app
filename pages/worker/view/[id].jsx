import { useRouter } from 'next/router';
import Head from 'next/head';
import { Row, Col, Card, Badge, Button, Alert } from 'react-bootstrap';
import { BiBrain, BiWindowAlt } from 'react-icons/bi';
import IconWithText from '../../../helper/icon-with-text';
import { useWorker } from '../../../helper/use-api';
import Loading from '../../../components/loading';

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

export default function ViewWorkerPage() {
    const router = useRouter();
    const { id } = router.query;

    const request = useWorker();
    request.run(id);

    // const data = { id, name: "Gerrit Weiermann", segment: "123", tlSection: "ABC", workArea: "Bau" };
    // run(id);

    return (
        <>
            <Head>
                <title>Mitarbeiter</title>
            </Head>

            <Loading request={request}>
                <Loading.Description>
                    Lade Mitarbeiter...
                </Loading.Description>

                <Loading.Success>
                    {data => (
                        <div>
                            <h1>Mitarbeiter {data.name} </h1>
                            
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
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Header>
                                    Arbeitsschritte
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {data.name} hat noch keien Arbeitsschritte zugewiesen bekommen
                                    </Card.Text>

                                    <Button variant="primary" href="">Arbeitsschritte zuweisen</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )}
                </Loading.Success>

                <Loading.Error>
                    {error => (
                        <Alert variant="danger">Mitarbeiter konnte nicht gefunden werden</Alert>
                    )}
                </Loading.Error>
                               
            </Loading>
        </>
    )
}