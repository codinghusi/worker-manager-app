import { useState } from "react";
import { Form } from "react-bootstrap";

class InputModel {
    constructor(def = "") {
        const [ value, setValue ] = useState(def);
        this.value = value;
        this.set = setValue;
        this.onChange = (e) => setValue(e.target.value);
    }
}

export function useModel(def) {
    const model = new InputModel(def);
    return model;
}

export default function ModeledControl(props) {
    const { model } = props;
    return <Form.Control {...props} value={model.value} onChange={model.onChange} />
}