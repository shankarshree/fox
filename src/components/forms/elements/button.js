import React from 'react'
import { Button } from "react-bootstrap"

const ButtonField = ({type, name, value, fieldClass}) => (
	<Button variant="" type={type} className={fieldClass}>
		{name}
	</Button>
);

export default ButtonField;