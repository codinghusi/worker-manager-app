import { useState, useEffect } from 'react';

export function useModal(def = false) {
    const [ state, setState ] = useState(def);
    return [ state, () => setState(true), () => setState(false) ];
}