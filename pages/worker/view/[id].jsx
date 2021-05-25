import { useRouter } from 'next/router';
import Head from 'next/head';
import { ProvideWorker, WorkerContext } from './../../../helper/fetching';
import { Header, Tab, Container, Segment } from 'semantic-ui-react';
import { TabOverview, TabDetails, TabWorksteps } from './../../../components/pages/view-worker';

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
    );
}