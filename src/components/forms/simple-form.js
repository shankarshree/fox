import React, { useState, useEffect } from "react"

import { Form } from "react-bootstrap"

import InputField from './elements/input'
import TextAreaField from './elements/textarea'
import CheckboxField from './elements/checkbox'
import ButtonField from './elements/button'
import HtmlBox from './elements/html'
import ReCaptchaBox from './elements/recaptcha'

import './assets/styles/_index.scss'

import axios from "axios"
import * as qs from "query-string"

function MySimpleForm(props) {
  const [validated, setValidated] = useState(false);
  const [showerror, setShowerror] = useState(false);
  const [showthankyou, setThankyou] = useState(false);

  const [formvalues, setFormvalues] = useState("");

  const [token, setToken] = useState("");

  const myRef = React.createRef();

  const recaptchaRef = React.createRef();

  const fields = ([
      {
        placeholder: "Name",
        name: "name",
        type: "text",
        element: "input",
        required: true,
        patternchk: "^[-a-zA-Z0-9-()]+(\\s+[-a-zA-Z0-9-()]+)*$",
        class: "mb-5"
      },
      {
        placeholder: "Email Address",
        name: "email",
        type: "email",
        element: "input",
        required: true,
        patternchk:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
        class: "mb-5"
      },
      {
        placeholder: "Telephone Number",
        name: "telephone",
        type: "text",
        element: "input",
        required: true,
        patternchk:"^[+]*[0-9-()]+(\\s+[0-9-()]+)*$",
        class: "mb-5"
      },
      {
        placeholder: "Message",
        name: "message",
        element: "textarea",
        class: "mb-5",
        rows:"3"
      },
      {
        placeholder: "Are you a Member?",
        name: "member",
        element: "checkbox",
        value: "",
        class:"check-card mb-4"
      },
      {
        placeholder: "Subscribe to our newsletter",
        name: "subscribe",
        element: "checkbox",
        value: "",
        class:"check-card mb-4"
      },
      {
        placeholder: 'Please confirm your consent to your data being used in accordance with our <a href="/privacy-policy/" className="content-link">privacy policy</a> *',
        name: "terms",
        element: "checkbox",
        required: true,
        value: "",
        class:"check-card mb-4"
      },
      {
        element: "captcha",
        class: "py-2",
        captchaRef: recaptchaRef
      },
      {
        text: 'If you would like to hear more about the latest Fox Club news, please <a href="/" className="content-link">click here</a> and we will add you to our e-mailing list.',
        element: "html",
        class: "mb-5 findfont"
      },
      {
        name: "submit",
        type:"submit",
        element: "button",
        value: "submit",
        class: "btn fox-btn findus"
      },
    ]);

  const handlechange = event => {
    // remove initial empty spaces
    event.target.value = event.target.value.trimStart()
  }

  useEffect(() => {
    if (token !== '') {

      // lets send mail
      const axiosOptions_email = {
        url: '/.netlify/functions/server/form-send',
        method: "post",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: qs.stringify(formvalues),
      }

      axios(axiosOptions_email)
        .then(response => {
          console.log('mail sent!')
        })
        .catch(err =>
          console.log(err)
        );

      formvalues['g-recaptcha-response'] = token;

      const axiosOptions_netlify = {
        url: '/find-us/',
        method: "post",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: qs.stringify(formvalues),
      }

      axios(axiosOptions_netlify)
        .then(response => {
          console.log('data stored')
        })
        .catch(err =>
          console.log(err)
        );

      // tracking event
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'formSubmit',
        'formType': 'form-findus',
        'formId': 'form-findus',
        'formName': 'Find Us',
        'formLabel': 'Find Us'
      });

      setShowerror(false);
      setThankyou(true);
      myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

    }
  }, [token]);

  const handleonVerify = token => {
    console.log("captcha verified");
    setToken(token);
  };

  const handleSubmit = event => {

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setShowerror(true);
      setValidated(true);
      setThankyou(false);
      myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    else {

      event.preventDefault();

      const formsdata = (event.target);
      const json = {}
      Object.keys(formsdata).map(key => (
        json[formsdata[key].name] = (formsdata[key].checked) ? 'yes' : formsdata[key].value
      ))

      json['email-temp'] = 'find-us';
      json['g-recaptcha-response'] = token;

      setFormvalues(json);

      recaptchaRef.current.execute();

      // lets collect data
      /*const formdata = new FormData(event.target)
      const json = {}
      formdata.forEach(function(value, prop){
        json[prop] = value
      })*/
      // FormData not support on old IOS devices

      setValidated(false);

      // reset form
      const form = event.target
      form.reset();
      
    }
  };

  return (
    <div className="form findusform">
    <div ref={myRef} />

    {showerror && <div className="alert-error">
      <p>Highlighted fields are required | invalid</p>
    </div>}

    {showthankyou && <div className="alert-success">
      <p>Thank you for finding us in the Fox Club. A member of our team will contact you shortly.</p>
    </div>}

    
      <Form name="Find Us" action="/thank-you/" method="post" noValidate validated={validated} onSubmit={handleSubmit} data-netlify="true" netlify-honeypot="bot-field" data-netlify-recaptcha="true">
        <input type="hidden" name="form-name" value="Find Us" />
        <input type="hidden" name="bot-field" />
        {fields.map((field, index) => {
            if ( "input" === field.element ) {
              return (
                <InputField
                  name={field.name}
                  ref={field.ref}
                  type={field.type}
                  fieldClass={field.class}
                  placeholder={field.placeholder}
                  required={field.required}
                  key={`{field.element}~${index}`}
                  pattern={field.patternchk}
                  handlechange={handlechange}
                />
              );
            }
            if ("textarea" === field.element) {
              return (
                <TextAreaField
                  name={field.name}
                  ref={field.ref}
                  rows={field.rows}
                  fieldClass={field.class}
                  placeholder={field.placeholder}
                  required={field.required}
                  key={`${field.element}~${index}`}
                  handlechange={handlechange}
                />
              );
            }
            if ("checkbox" === field.element) {
              return (
                <CheckboxField
                  name={field.name}
                  ref={field.ref}
                  value={field.value}
                  fieldClass={field.class}
                  placeholder={field.placeholder}
                  required={field.required}
                  key={`${field.name}~${index}`}
                  handlechange={handlechange}
                />
              );
            }
            if ("html" === field.element) {
              return (
                <HtmlBox
                  text={field.text}
                  fieldClass={field.class}
                  key={`{field.element}~${index}`}
                />
              );
            }
            if ("captcha" === field.element) {
              return (
                <ReCaptchaBox
                  fieldClass={field.class}
                  captRef={field.captchaRef}
                  key={`{field.element}~${index}`}
                  handleonVerify={handleonVerify}
                />
              );
            }
            if ("button" === field.element) {
              return (
                <ButtonField
                  name={field.name}
                  fieldClass={field.class}
                  type={field.type}
                  value={field.value}
                  key={`{field.element}~${index}`}
                />
              );
            }
          })
        }
      </Form>
    </div>
  );
}


const MySimpleFormPage = () => (
  <MySimpleForm />
)

export default MySimpleFormPage