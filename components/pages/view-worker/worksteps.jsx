import { Segment, Header, Button, Icon } from 'semantic-ui-react';
import WorkstepsForm from '../../worker/workstep-form/worksteps-form';
import { useState, Component } from 'react';

const dbSteps = [
    {
        id: "1",
        name: 'Arbeitsschritt 1',
        machineDuration: '2m',
        workDuration: '5m',
        walkDuration: '3m'
    },
    {
        id: "2",
        name: 'Arbeitsschritt 2',
        machineDuration: '1m',
        workDuration: '3m',
        walkDuration: '5m'
    },
    {
        id: "3",
        name: 'Arbeitsschritt 3',
        machineDuration: '5m',
        workDuration: '8m',
        walkDuration: '1m'
    }
];

export default function TabWorksteps({ data }) {
    const exists = true;

    const [ steps, setSteps ] = useState(dbSteps);

    return (
        <>
            {!exists && (
                <Segment placeholder>
                    
                        <Header icon>
                            <Icon name="plus" />
                            Keine Arbeitsschritte angelegt
                        </Header>
                    
                    
                    <Button primary>Arbeitsschritte erstellen</Button>
                </Segment>
            ) || (
                <WorkstepsForm steps={steps} onChange={setSteps} />
            )}
        </>
    );
}