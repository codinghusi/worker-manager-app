import { Children } from 'react';

// code from https://medium.com/maxime-heckel/react-sub-components-513f6679abed

export function findByType(children, component) {
    const result = [];
    const type = [component.displayName ?? component.name];

    Children.forEach(children, child => {
        const childType = child?.type?.displayName ?? child?.type?.name;

        if (type.includes(childType)) {
            result.push(child);
        }
    });

    return result[0];	
};