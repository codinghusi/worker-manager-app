import { useRouter } from 'next/router';
import Head from 'next/head';
import { ProvideWorker, WorkerContext } from './../../../helper/fetching';
import { EditWorkerForm } from '../../../components/worker/worker-form';
import { Button, List, Header, Tab, Container, Segment, Icon } from 'semantic-ui-react';


function TabDetails({ data }) {
    return (
        <Segment>
            <EditWorkerForm />
        </Segment>
    );
}

function TabOverview({ data }) {
    return (
        <Segment>
            <List horizontal>
                <List.Item>
                    <List.Icon name="circle" verticalAlign="middle" />
                    <List.Content>
                        <List.Header> TL-Bereich </List.Header>
                        <List.Description> {data.tlSection} </List.Description>
                    </List.Content>
                </List.Item>

                <List.Item>
                    <List.Icon name="address card" verticalAlign="middle" />
                    <List.Content>
                        <List.Header> Segment </List.Header>
                        <List.Description> {data.segment} </List.Description>
                    </List.Content>
                </List.Item>

                <List.Item>
                    <List.Icon name="compass" verticalAlign="middle" />
                    <List.Content>
                        <List.Header> Arbeitsbereich </List.Header>
                        <List.Description> {data.workArea} </List.Description>
                    </List.Content>
                </List.Item>
            </List>
        </Segment>
    );
}

function TabWorksteps({ data }) {
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name="plus" />
                Keine Arbeitsschritte angelegt
            </Header>
            <Button primary>Arbeitsschritte erstellen</Button>
        </Segment>
    );
}

export default function ViewWorkerPage() {
    const router = useRouter();
    const { id } = router.query;

    const Core = ({ data }) => {
        const panes = [
            {
                menuItem: "Übersicht",
                render: () => <TabOverview data={data} />
            },
            {
                menuItem: "Details",
                render: () => <TabDetails data={data} />
            },
            {
                menuItem: "Arbeitsschritte",
                render: () => <TabWorksteps data={data} />
            }
        ];

        const polishedPanes = panes.map(pane => ({
            ...pane,
            render: (...args) => (
                <div>
                    <Header as="h5" attached="top"> Mitarbeiter {data.name} </Header>
                    <Segment attached> {pane.render(...args)} </Segment>
                </div>
            )
        }));

        return (
            <>
                <Head attached="top">
                    <title> Mitarbeiter {data.name} </title>
                </Head>

                <Container>
                    <br />   
                        <Tab
                            menu={{ fluid: false, vertical: true,  }}
                            menuPosition="left"
                            panes={polishedPanes}
                        />
                </Container>
            </>
        );
    }
    
    return (
        <ProvideWorker workerId={id}>
            <WorkerContext.Consumer>
                {Core}
            </WorkerContext.Consumer>
        </ProvideWorker>
    )
}