import { Segment, Header, Button, Icon } from 'semantic-ui-react';
import WorkstepForm from '../../worker/workstep-form/workstep-form';

export default function TabWorksteps({ data }) {
    const exists = true;
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
                <WorkstepForm />
            )}
        </>
    );
}