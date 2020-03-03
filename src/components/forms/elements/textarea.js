import React from 'react'
import { Form } from "react-bootstrap"


const TextAreaField = ({name, rows, placeholder, required, handlechange, fieldClass}) => (
  <Form.Group controlId="validation{name}">
    <Form.Control
      className={fieldClass}
      name={name}
      required={required}
      as="textarea"
      rows={rows}
      onChange={handlechange}
      placeholder={placeholder} 
    />
  </Form.Group>
);

export default TextAreaField;