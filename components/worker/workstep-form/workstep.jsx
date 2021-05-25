import { Header, Segment } from "semantic-ui-react";


export default function Workstep({ step }) {
    return (
        <Segment>
            <Header as="h5"> {step.name} </Header>
            <p> Maschinendauer: {step.machineDuration} </p>
            <p> Arbeitsdauer: {step.workDuration} </p>
            <p> Laufweg: {step.walkDuration} </p>
        </Segment>
    )
}