import { Segment } from "semantic-ui-react";
import Workstep from './workstep';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useEffect, useState } from 'react';

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

    const Test = () => (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <Segment>
                            { steps?.map((step, index) => (
                                <Draggable key={step.id} draggableId={step.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <Workstep step={step} />
                                            <br />
                                        </div>
                                    )}
                                </Draggable>
                            )) }
                            {provided.placeholder}
                        </Segment>
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );

    return <Test />;
}
