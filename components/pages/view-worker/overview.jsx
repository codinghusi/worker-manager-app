import { Segment, List } from 'semantic-ui-react';

export default function TabOverview({ data }) {
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