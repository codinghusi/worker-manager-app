import { useState, useEffect } from 'react';

export function useModal(def = false) {
    const [ state, setState ] = useState(def);
    return [ state, () => setState(true), () => setState(false) ];
}

export function useWrap(state, updateCallback) {
    const [ myState, setState ] = useState();
    useEffect(() => setState(updateCallback(state)), [state]);
    return myState;
}

export function useWraps(states, updateCallback) {
    const [ myState, setState ] = useState();
    useEffect(() => setState(updateCallback(states)), states);
    return myState;
}