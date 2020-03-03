import React, { Component } from 'react';
import FormPersonal from './FormPersonalNew';
import FormWork from './FormWorkNew';
import FormMembership from './FormMembershipNew';
import FormSuccess from './FormSuccess';
import './assets/styles/_index.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Form, Button } from "react-bootstrap"

import axios from "axios"
import * as qs from "query-string"

const myRef = React.createRef();

const currenturl = typeof window !== 'undefined' ? window.location.href : ''

export class MultiForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,

      validated: false,
      showerror: false,
      showerror2: false,
      showthankyou: false,

      activeclass1: 'active',
      activeclass2: '',
      activeclass3: '',

      title: '',
      firstname: '',
      surname: '',
      gender: '',
      birth_date: '',
      nationality: '',
      occupation: '',
      home_address: '',
      address2: '',
      city: '',
      postcode: '',
      country: '',
      telephone: '',
      email: '',

      businessname: '',
      business_address: '',
      business_postcode: '',
      business_telephone: '',
      business_street_address: '',
      business_city: '',
      business_country: '',
      business_email: '',
      current_member: '',
      hear_about: '',
      business_member: '',
      home_member: '',

      mayfair_individual: '',
      mayfair_joint: '',
      mayfair_overseas: '',
      country_individual: '',
      country_joint: '',
      corporate: '',
      sme_membership: '',
      young_fox: '',
      monthly_membership: '',
      subscription: ''
    }
  }

  handleDate = (moment, name) => { if (moment) { this.setState({ birth_date: moment.format('DD/MM/YYYY') }); } }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {

    //recaptchaRef.current.execute();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {

      event.preventDefault();
      event.stopPropagation();

      this.setState({ showerror: true, showerror2: false, validated: true })

      myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    else {


      if (this.state.currentStep === 3) {

        if (('' === this.state.mayfair_individual) && ('' === this.state.mayfair_joint) && ('' === this.state.mayfair_overseas) && ('' === this.state.country_individual) && ('' === this.state.country_joint) && ('' === this.state.corporate) && ('' === this.state.sme_membership) && ('' === this.state.young_fox) && ('' === this.state.monthly_membership)) {
          event.preventDefault();
          event.stopPropagation();

          this.setState({ showerror2: true, showerror: false })

          myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        else {
            this.setState({ showerror2: false })

            event.preventDefault();
            // lets collect data
            const formsdata = (event.target);
            const json = {}
            Object.keys(formsdata).map(key => (
              json[formsdata[key].name] = (formsdata[key].checked) ? 'yes' : formsdata[key].value
            ))

          json['email-temp'] = 'membership';    

          event.persist()

          // let store in netlify
          const axiosOptions_email = {
            url: '/.netlify/functions/server/form-membership',
            method: "post",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            data: qs.stringify(json)
          }

          axios(axiosOptions_email)
            .then(response => {
              console.log('mail sent!');

              // tracking event
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                'event': 'formSubmit',
                'formType': 'form-membership',
                'formId': 'form-membership',
                'formName': 'Membership Us',
                'formLabel': 'Membership Us'
              });

              event.target.submit();

            })
            .catch(err =>
              console.log(err)
            );

        }
      }
      else {
        event.preventDefault();
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 2 ? 3 : currentStep + 1
        this.setState({
          currentStep: currentStep
        })
        if (currentStep === 1) {
          this.setState({
            activeclass1: 'active',
            activeclass2: '',
            activeclass3: ''
          })
        }
        if (currentStep === 2) {
          this.setState({
            activeclass1: '',
            activeclass2: 'active',
            activeclass3: ''
          })
        }
        if (currentStep === 3) {
          this.setState({
            activeclass1: '',
            activeclass2: '',
            activeclass3: 'active'
          })
        }
        myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  };

  _next = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {

      event.preventDefault();
      event.stopPropagation();

      this.setState({ showerror: true, validated: true })

      myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      //let currentStep = this.state.currentStep
      //currentStep = currentStep >= 2? 3: currentStep + 1
      //this.setState({
      //  currentStep: currentStep
      //})
    }
  }

  _prev = (event) => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1 ? 1 : currentStep - 1
    this.setState({
      currentStep: currentStep
    })

    if (currentStep === 1) {
      this.setState({
        activeclass1: 'active',
        activeclass2: '',
        activeclass3: ''
      })
    }
    if (currentStep === 2) {
      this.setState({
        activeclass1: '',
        activeclass2: 'active',
        activeclass3: ''
      })
    }
    if (currentStep === 3) {
      this.setState({
        activeclass1: '',
        activeclass2: '',
        activeclass3: 'active'
      })
    }
    myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="fox-button mr-4 mb-md-0 mb-3"
          type="button"
          onClick={this._prev}>
          Previous
      </button>
      )
    }
    return null;
  }

  submitButton() {
    let currentStep = this.state.currentStep;
    if (currentStep === 3) {
      return (
        <button
          className="fox-button"
        >
          Submit Request
      </button>
      )
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className="fox-button"
          type="submit">
          Next
      </button>
      )
    }
    return null;
  }

  render() {
    return (
      <React.Fragment>

      <div ref={myRef} />
      <Form name="Membership" action="/membership/membership-thankyou/" method="post" noValidate validated={this.state.validated} onSubmit={this.handleSubmit} data-netlify="true">
        <input type="hidden" name="form-name" value="Membership" />

        <input type="hidden" name="bot-field" />
                <section className="multiform">
                    <Container className="mb-4 pb-2">
                        <Row>
                            <Col lg={12}>
                                <ul className="list-inline list-pass">
                                    <li className={`list-inline-item ${this.state.activeclass1}`}><span>1</span> Personal</li>
                                    <li className={`list-inline-item ${this.state.activeclass2}`}><span>2</span> Work</li>
                                    <li className={`list-inline-item ${this.state.activeclass3}`}><span>3</span> Membership</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                          <Col lg={12}>
                            {this.state.showerror && <div className="alert-error">
                              <p>Highlighted fields are required/invalid</p>
                            </div>}
                            {this.state.showerror2 && <div className="alert-error">
                              <p>Please select your preferred membership type</p>
                            </div>}
                            {this.state.showthankyou && <div className="alert-success">
                              <p>Thank you for contacting the Fox Club. A member of our team will contact you shortly.</p>
                            </div>}
                          </Col>
                        </Row>
                    </Container>

        <FormPersonal 
          currentStep={this.state.currentStep} 
          handleDate={this.handleDate}
          handleChange={this.handleChange}
          title={this.state.title}
          firstname={this.state.firstname}
          surname={this.state.surname}
          gender={this.state.gender}
          birth_date={this.state.birth_date}
          nationality={this.state.nationality}
          occupation={this.state.occupation}
          home_address={this.state.home_address}
          address2={this.state.address2}
          city={this.state.city}
          postcode={this.state.postcode}
          country={this.state.country}
          telephone={this.state.telephone}
          email={this.state.email}
        />
        <FormWork 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          businessname={this.state.businessname}
          business_address={this.state.business_address}
          business_postcode={this.state.business_postcode}
          business_telephone={this.state.business_telephone}
          hear_about={this.state.hear_about}
          business_member={this.state.business_member}
          home_member={this.state.home_member}
          business_street_address={this.state.business_street_address}
          business_city={this.state.business_city}
          business_country={this.state.business_country}
          business_email={this.state.business_email}
          current_member={this.state.current_member}
        />
        <FormMembership 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          mayfair_individual={this.state.mayfair_individual}
          mayfair_joint={this.state.mayfair_joint}
          mayfair_overseas={this.state.mayfair_overseas}
          country_individual={this.state.country_individual}
          country_joint={this.state.country_joint}
          corporate={this.state.corporate}
          sme_membership={this.state.sme_membership}
          young_fox={this.state.young_fox}
          monthly_membership={this.state.monthly_membership}
          subscription={this.state.subscription}
        />
        </section>
<input type="hidden" name="title" value={this.state.title} />
<input type="hidden" name="firstname" value={this.state.firstname} />
<input type="hidden" name="surname" value={this.state.surname} />
<input type="hidden" name="gender" value={this.state.gender} />
<input type="hidden" name="birth_date" value={this.state.birth_date} />
<input type="hidden" name="nationality" value={this.state.nationality} />
<input type="hidden" name="occupation" value={this.state.occupation} />
<input type="hidden" name="home_address" value={this.state.home_address} />
<input type="hidden" name="address2" value={this.state.address2} />
<input type="hidden" name="city" value={this.state.city} />
<input type="hidden" name="postcode" value={this.state.postcode} />
<input type="hidden" name="country" value={this.state.country} />
<input type="hidden" name="telephone" value={this.state.telephone} />
<input type="hidden" name="email" value={this.state.email} />
<input type="hidden" name="businessname" value={this.state.businessname} />
<input type="hidden" name="business_address" value={this.state.business_address} />
<input type="hidden" name="business_postcode" value={this.state.business_postcode} />
<input type="hidden" name="business_telephone" value={this.state.business_telephone} />
<input type="hidden" name="business_street_address" value={this.state.business_street_address} />
<input type="hidden" name="business_city" value={this.state.business_city} />
<input type="hidden" name="business_country" value={this.state.business_country} />
<input type="hidden" name="business_email" value={this.state.business_email} />
<input type="hidden" name="current_member" value={this.state.current_member} />
<input type="hidden" name="hear_about" value={this.state.hear_about} />
<input type="hidden" name="business_member" value={this.state.business_member} />
<input type="hidden" name="home_member" value={this.state.home_member} />

<input type="hidden" name="mayfair_individual" value={this.state.mayfair_individual} />
<input type="hidden" name="mayfair_joint" value={this.state.mayfair_joint} />
<input type="hidden" name="mayfair_overseas" value={this.state.mayfair_overseas} />
<input type="hidden" name="country_individual" value={this.state.country_individual} />
<input type="hidden" name="country_joint" value={this.state.country_joint} />
<input type="hidden" name="corporate" value={this.state.corporate} />
<input type="hidden" name="sme_membership" value={this.state.sme_membership} />
<input type="hidden" name="young_fox" value={this.state.young_fox} />
<input type="hidden" name="monthly_membership" value={this.state.monthly_membership} />
<input type="hidden" name="subscription" value={this.state.subscription} />
          <Container>
            <Row>
              <Col lg={12}>
                {this.previousButton()}
                {this.nextButton()}
                {this.submitButton()}
              </Col>
            </Row>
          </Container>
      </Form>
      </React.Fragment>
    );
  }
}


export default MultiForm;