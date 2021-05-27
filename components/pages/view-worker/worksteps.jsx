import { Segment, Header, Button, Icon } from 'semantic-ui-react';
import WorkstepsForm from '../../worker/workstep-form/worksteps-form';
import { useEffect, useState } from 'react';
import { useUpdateWorkstepsMutation } from '../../../api/generated/graphql';
import { onlyThisFields } from '../../../helper/data-check';


export default function TabWorksteps({ data }) {
    const [ steps, setSteps ] = useState(data.worksteps?.map(step => ({ ...step, key: step.id })));
    const [ updateDB, { loading: submitting, error } ] = useUpdateWorkstepsMutation();
    const [ exists, setExists ] = useState(!!steps?.length);

    useEffect(() => {
        if (steps?.length) {
            setExists(true);
        }
    }, [steps])

    const handleSubmit = (steps) => {
        const serialized = steps.map(onlyThisFields([ 'id', 'name', 'machineDuration', 'workDuration', 'walkDuration' ]));
        const removed = data.worksteps.filter(step => !steps.find(s => s.id === step.id)).map(step => ({id: step.id}));
        updateDB({ variables: { id: data.id, data: serialized, remove: removed } });
    }

    const handleCreateWorkstep = () => {
        setSteps([
            { key: "firstone" }
        ]);
    }

    return (
        <>
            {!steps?.length && (
                <Segment placeholder>
                    <Header icon>
                        <Icon name="plus" />
                        Keine Arbeitsschritte angelegt
                    </Header>
                    
                    <Button primary onClick={handleCreateWorkstep}>Arbeitsschritte erstellen</Button>
                </Segment>
            ) || (
                <WorkstepsForm steps={steps} onChange={setSteps} onSubmit={handleSubmit} submitting={submitting} />
            )}
        </>
    );
}