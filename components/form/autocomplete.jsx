import { Form } from 'semantic-ui-react';
import { useEffect, useState } from 'react';

export default function Autocomplete({ name, placeholder, label, onChange, options, value, loading }) {
    const [ myOptions, setMyOptions ] = useState(options ?? []);

    useEffect(() => updateOptions(value), [options])

    const updateOptions = (value) => {
        const safeOptions = options ?? [];
        if (value && !safeOptions.find(option => option.value === value)) {
            setMyOptions([
                { value, text: value },
                ...safeOptions
            ]);
        } else if (!myOptions.length) {
            setMyOptions(safeOptions);
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
            selectOnBlur={false}
            noResultsMessage={null}
            allowAdditions
            additionLabel="Neu: "
            {...{label, placeholder, name}}

            options={myOptions}
            loading={loading}

            value={value}
            onChange={handleOnChange}

            onAddItem={handleNewItem}
        />
    );
}