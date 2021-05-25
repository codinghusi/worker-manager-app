import { Segment, Header, Button } from 'semantic-ui-react';

export default function TabWorksteps({ data }) {
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