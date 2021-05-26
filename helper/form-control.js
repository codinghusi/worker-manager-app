import { useState, useEffect } from 'react';

export default function useFormControl(vals = {}) {
    const [ values, setValues ] = useState(vals);

    useEffect(() => setValues(vals), [vals]);

    const handleChange = name => value => setValues({
        ...values,
        [name]: value
    });

    const useFieldControl = (name) => {
        const handleChangeWithName = handleChange(name);
        return {
            name,
            value: values[name],
            onChange: (e, {value}) => handleChangeWithName(value)
        }
    }

    const useAutocompleteControl = (name) => {
        return {
            name,
            value: values[name],
            onChange: handleChange(name)
        }
    }

    return { values, useFieldControl, useAutocompleteControl };
}