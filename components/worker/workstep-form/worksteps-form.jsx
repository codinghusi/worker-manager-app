import { Segment, Divider, Form } from "semantic-ui-react";
import Workstep from './workstep';
import WorkstepForm from './workstep-form';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from 'react';

// Maschinendauer, Arbeitsdauer, Wegdauer

export default function WorkstepsForm({ steps, onChange }) {
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
        const index = newSteps.findIndex(s => s.id === step.id);

        if (index === -1) {
            console.error("this is weird"); // never happened, but who knows
            return;
        }

        newSteps.splice(index, 1, step);
        onChange(newSteps);
        // setSelectedStep(step);
    }

    const [ selectedStep, setSelectedStep ] = useState(steps?.[0]);

    return (
        <Segment>
            <WorkstepForm step={selectedStep} onChange={updateStep} />
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
                                    <Draggable key={step.id} draggableId={step.id} index={index}>
                                        {(provided, snapshot) => (
                                            <>
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <Workstep step={step} onClick={setSelectedStep} selected={step.id === selectedStep.id} />
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
