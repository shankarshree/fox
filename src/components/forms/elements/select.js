import React from 'react'
import { Form } from "react-bootstrap"


const SelectField = ({name, required, placeholder, values, handlechange, fieldClass}) => (
  <Form.Group controlId="validation{name}">
    <Form.Control
		className={fieldClass}
		required={required}
		name={name}
		onChange={handlechange}
		as="select"
		>
		<option value="">{placeholder}</option>
		{values.map(val =><option value={val} key={val}>{val}</option>)}
    </Form.Control>
  </Form.Group>

);

export default SelectField;