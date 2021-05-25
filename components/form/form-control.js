import { useState } from 'react';

export default function useFormControl(defaultValues = {}) {
    const [ values, setValues ] = useState(defaultValues);

    const handleChange = name => value => setValues({
        ...values,
        [name]: value
    });

    const useFieldControl = (name) => {
        return {
            name,
            value: values[name],
            onChange: handleChange(name)
        }
    }

    return [ values, useFieldControl ];
}