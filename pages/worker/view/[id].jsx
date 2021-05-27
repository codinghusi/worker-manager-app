import { useRouter } from 'next/router';
import Head from 'next/head';
import { ProvideWorker, WorkerContext } from './../../../helper/fetching';
import { Header } from 'semantic-ui-react';
import { TabOverview, TabDetails, TabWorksteps } from '../../../components/pages/view-worker';

export default function ViewWorkerPage() {
    const router = useRouter();
    const { id } = router.query;

    const sections = [
        {
            title: "Übersicht",
            render: (data) => <TabOverview data={data} />
        },
        {
            title: "Details",
            render: (data) => <TabDetails data={data} />
        },
        {
            title: "Arbeitsschritte",
            render: (data) => <TabWorksteps data={data} />
        }
    ]

    const Core = ({ data }) => (
        <>
            <Head>
                <title> Mitarbeiter {data.name} </title>
            </Head>

            <div>
                <br />   
                {sections.map(section => (
                    <div>
                        <Header as="h4">
                            {section.title}
                        </Header>
                        {section.render(data)}
                        <br />
                    </div>
                ))}
            </div>
        </>
    );
    
    return (
        <ProvideWorker workerId={id}>
            <WorkerContext.Consumer>
                {Core}
            </WorkerContext.Consumer>
        </ProvideWorker>
    );
}