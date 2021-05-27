import { Segment, Divider, Button } from "semantic-ui-react";
import Workstep from './workstep';
import WorkstepForm from './workstep-form';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from 'react';
import { createStep } from '../../../helper/fetching';


// Maschinendauer, Arbeitsdauer, Wegdauer

export default function WorkstepsForm({ steps, onChange, onSubmit, submitting }) {
    const [ selectedStep, setSelectedStep ] = useState(steps?.[0]);

    const moveItem = (fromIndex, toIndex) => {
        const newSteps = steps.slice();
        const [movedItem] = newSteps.splice(fromIndex, 1);
        newSteps.splice(toIndex, 0, movedItem);
        onChange(newSteps);
    }

    const handleDragEnd = ({ source, destination}) => {
        if (!destination) {
            return;
        }
        if (source.index === destination.index) {
            return;
        }
        moveItem(source.index, destination.index);
    };

    const updateStep = (step) => {
        const newSteps = steps.slice();
        const index = newSteps.findIndex(s => s.key === step.key);

        if (index === -1) {
            console.error("this is weird"); // never happened, but who knows
            return;
        }

        newSteps.splice(index, 1, step);
        onChange(newSteps);
        // setSelectedStep(step); // does recursive dogshit, I want this line in, though
    }

    const handleSubmit = () => {
        onSubmit(steps.map(step => ({ ...step, key: undefined })));
    }

    const handleAddStep = () => {
        const randomKey = 'key-' + Date.now() + "-" + Math.round(Math.random() * 10);
        // const newStep = { key: randomKey, name: '', machineDuration: '', workDuration: '', walkDuration: '' }
        const newStep = createStep({ key: randomKey });
        onChange([
            ...steps,
            newStep
        ]);
        setSelectedStep(newStep);
    }

    const handleDelete = () => {
        const newSteps = steps.slice();
        const index = newSteps.findIndex(s => s.key === selectedStep?.key);

        if (index === -1) {
            return;
        }

        newSteps.splice(index, 1);
        onChange(newSteps);
        setSelectedStep(newSteps[Math.min(newSteps.length - 1, index)]);
    }



    return (
        <Segment loading={submitting}>
            <WorkstepForm step={selectedStep} onChange={updateStep} />
            <Button primary onClick={handleSubmit}>Speichern</Button>
            <Button secondary onClick={handleAddStep}>Hinzufügen</Button>
            <Button negative onClick={handleDelete}>Löschen</Button>
            <Divider />
            <br />
            <br />
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            { steps?.map((step, index) => (
                                    <Draggable key={step.key} draggableId={step.key} index={index}>
                                        {(provided, snapshot) => (
                                            <>
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <Workstep step={step} onClick={setSelectedStep} selected={step.key === selectedStep.key} />
                                                    <br />
                                                </div>
                                            </>
                                        )}
                                    </Draggable>
                            )) }
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </Segment>
    );
}
