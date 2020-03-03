import React from 'react'
import { Form } from "react-bootstrap"

const RadioboxField = ({name, required, placeholder, values, handlechange, fieldClass}) => (
  <Form.Group controlId="validation{name}">
    <div key={name}>
      {values.map(val =>
        <Form.Check custom className={fieldClass} required={required} type="radio" label={placeholder} name={val} value={val} id={val} onChange={handlechange} />
        )}
    </div>
  </Form.Group>

);

export default RadioboxField;