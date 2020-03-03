import React from 'react'
import { Form } from "react-bootstrap"

function myplaceholder(props) {
  return <div>{props.html}</div>;
}

function createMarkup(props) {
  return {__html: (props.html)};
}

function MyComponent(props) {
  return <div dangerouslySetInnerHTML={createMarkup(props)} />;
}

const CheckboxField = ({fieldClass, name, value, required, placeholder, handlechange}) => (
  <div className="form-group">
      <label className="check-card mb-4 pb-2"><MyComponent html={placeholder} />
          <input required={required} className="" type="checkbox" id={name} name={name} value={value} />
          <span className="check-mark"></span>
      </label>
  </div>
);

export default CheckboxField