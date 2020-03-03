import React from 'react'
import { Form } from "react-bootstrap"

const InputField = ({fieldClass, type, name, value, required, placeholder, handlechange, pattern}) => (
  <Form.Group controlId={"validation" + name}>
    <Form.Control
      className={fieldClass}
      required={required}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handlechange}
      pattern={pattern}
    />
  </Form.Group>
);

export default InputField;