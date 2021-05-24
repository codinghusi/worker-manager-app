import { useState, useEffect } from 'react';

export function useModal(def = false) {
    const [ state, setState ] = useState(def);
    return [ state, () => setState(true), () => setState(false) ];
}

export function useCopyObject(state) {
    const [ value, setValue ] = useState(null);
    useEffect(() => {
        setValue({...state});
    }, [state]);
    return [ value, setValue ];
}