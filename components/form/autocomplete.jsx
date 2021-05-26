import { Form } from 'semantic-ui-react';
import { useEffect, useState } from 'react';

export default function Autocomplete({ name, placeholder, label, onChange, options, value, loading }) {
    const [ myOptions, setMyOptions ] = useState(null);

    useEffect(() => updateOptions(value), [options]);

    const updateOptions = (value) => {
        const safeOptions = options ?? [];
        const values = safeOptions.map(option => option.value)

        if (value && !values.includes(value)) {
            setMyOptions([
                { value, text: value },
                ...safeOptions
            ]);
        } else {
            setMyOptions([
                ...safeOptions
            ]);
        }
    }

    const handleOnChange = (event, { value }) => {
        updateOptions(value);
        onChange(value);
    }

    const handleNewItem = handleOnChange;

    return (
        <Form.Dropdown
            required
            fluid
            selection
            search
            noResultsMessage={null}
            allowAdditions
            additionLabel="Neu: "
            {...{label, placeholder, name}}

            options={myOptions ?? []}
            loading={loading}

            value={value}
            onChange={handleOnChange}
            onSearchChange={handleOnChange}

            onAddItem={handleNewItem}
        />
    );
}