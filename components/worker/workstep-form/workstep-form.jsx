import { Segment } from "semantic-ui-react";
import Workstep from './workstep';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useEffect, useState } from 'react';

// Maschinendauer, Arbeitsdauer, Wegdauer

export default function WorkstepForm({}) {
    console.log("render");
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

    const [ steps, setSteps ] = useState(dbSteps);
    useEffect(() => console.log("steps changed", steps.map(step => step.id)), [steps]);

    const moveItem = (fromIndex, toIndex) => {
        const newSteps = steps.slice();
        const [movedItem] = steps.splice(fromIndex, 1);
        steps.splice(toIndex, 0, movedItem);
        setSteps(newSteps);
    }

    const handleDragEnd = ({ source, destination}) => {
        if (!destination) {
            return;
        }
        if (source.index === destination.index) {
            return;
        }
        moveItem(source.index, destination.index);
        console.log("drag end", steps.map(step => step.name));
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
                            { steps.map((step, index) => (
                                <Draggable key={step.id} draggableId={step.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <Workstep step={step} />
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
    )

    return <Test />;
}
