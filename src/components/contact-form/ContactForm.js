import React, { Component, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { Link } from "gatsby";
import './assets/styles/_index.scss';
import { Location } from '@reach/router'

import axios from "axios"
import qs from "query-string"

import {Form, Button} from "react-bootstrap"
import ReCAPTCHA from 'reaptcha'

const recaptchaRef = React.createRef();
const myRef = React.createRef();

const currenturl = typeof window !== 'undefined' ? window.location.href : ''

export class ContactForm extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          selectedInterest: this.props.radioSelect,
          validated: false,
          showerror: false,
          showthankyou: false,
          formvalues: '',
          token: '',
          formarrivaldate: '',
          formdeparturedate: '',
          formpreferreddate: '',
          interest_type: this.props.radioSelect || 'rooms',
        };

        
      }

    componentDidMount() {
        this.chkFormInputs(this.state.selectedInterest);
    }

    chkFormInputs(value) {

        var ele_room_arrivaldatediv = ReactDOM.findDOMNode(this.refs.arrivaldate);
        var ele_room_departuredatediv = ReactDOM.findDOMNode(this.refs.departuredate);
        var ele_room_roomtypediv = ReactDOM.findDOMNode(this.refs.roomtypediv);
        var ele_room_roomsdiv = ReactDOM.findDOMNode(this.refs.roomsdiv);
        var ele_room_adultsdiv = ReactDOM.findDOMNode(this.refs.adultsdiv);

        var ele_food_event_numbersdiv = ReactDOM.findDOMNode(this.refs.numbersdiv);
        var ele_food_event_preferreddatediv = ReactDOM.findDOMNode(this.refs.preferreddatediv);


        if ('rooms' === value){
            (ele_room_arrivaldatediv.children[0].children[0]).setAttribute('required', 'required');
            (ele_room_departuredatediv.children[0].children[0]).setAttribute('required', 'required');
            (ele_room_roomtypediv.children[0]).setAttribute('required', 'required');
            (ele_room_roomsdiv.children[0]).setAttribute('required', 'required');
            (ele_room_adultsdiv.children[0]).setAttribute('required', 'required');
            (ele_food_event_numbersdiv.children[0]).removeAttribute('required');
            (ele_food_event_preferreddatediv.children[0].children[0]).removeAttribute('required');
        }
        else {
            (ele_room_arrivaldatediv.children[0].children[0]).removeAttribute('required');
            (ele_room_departuredatediv.children[0].children[0]).removeAttribute('required');
            (ele_room_roomtypediv.children[0]).removeAttribute('required');
            (ele_room_roomsdiv.children[0]).removeAttribute('required');
            (ele_room_adultsdiv.children[0]).removeAttribute('required');
            (ele_food_event_numbersdiv.children[0]).setAttribute('required', 'required');
            (ele_food_event_preferreddatediv.children[0].children[0]).setAttribute('required', 'required');
        }

        var ele_food_menutypediv = ReactDOM.findDOMNode(this.refs.menutypediv);

        if ('food' === value){
            (ele_food_menutypediv.children[0]).setAttribute('required', 'required');
        }
        else {
            (ele_food_menutypediv.children[0]).removeAttribute('required');
        }

        var ele_event_persontypediv = ReactDOM.findDOMNode(this.refs.persontypediv);
        var ele_event_eventtypediv = ReactDOM.findDOMNode(this.refs.eventtypediv);

        if ('events' === value){
            (ele_event_persontypediv.children[0]).setAttribute('required', 'required');
            (ele_event_eventtypediv.children[0]).setAttribute('required', 'required');
        }
        else {
            (ele_event_persontypediv.children[0]).removeAttribute('required');
            (ele_event_eventtypediv.children[0]).removeAttribute('required');

        }

    }

    handleInterestChange = (event) => {

        this.setState({
          selectedInterest: event.currentTarget.value
        })
        this.chkFormInputs((event.currentTarget.value));

        const {name, value} = event.target
        this.setState({
          [name]: value
        })
       
    };

    handlechange = (event) => {
        // remove initial empty spaces
        event.target.value = event.target.value.trimStart()
    }

    sendMydata() {


    if ( (this.state.token) !== '' ) {

        this.setState({formarrivaldate: false})
        this.setState({formdeparturedate: false})
        this.setState({formpreferreddate: false})

      // lets send mail
      const axiosOptions_email = {
        url: '/.netlify/functions/server/form-contact',
        method: "post",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: qs.stringify(this.state.formvalues),
      }

      axios(axiosOptions_email)
        .then(response => {
          console.log('mail sent!')
        })
        .catch(err =>
          console.log(err)
        );

      this.state.formvalues['g-recaptcha-response'] = (this.state.token);

      const axiosOptions_netlify = {
        url: currenturl,
        method: "post",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: qs.stringify(this.state.formvalues),
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
            'formType': 'form-contactus',
            'formId': 'form-contactus',
            'formName': 'Contact Us',
            'formLabel': 'Contact Us - '+this.state.formvalues['interest_type']
        });

        this.setState({ showerror: false, showthankyou: true })

        myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

    }
}

  handleonVerify = token => {
    this.setState({ token: token });
    this.sendMydata();
    //this.state.token = token;
  };

    handleSubmit = (event) => {

        //recaptchaRef.current.execute();

        const form = event.currentTarget;

        if (form.checkValidity() === false) {

          event.preventDefault();
          event.stopPropagation();

          this.setState({ showerror: true, validated: true, showthankyou: false })

          myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

        }
        else {

            event.preventDefault();

            const formsdata = (event.target);
            const json = {}
            Object.keys(formsdata).map(key => (
                json[formsdata[key].name] = (formsdata[key].checked) ? 'yes' : formsdata[key].value
            ))

            json['email-temp'] = 'contact-us';    

            json['g-recaptcha-response'] = this.state.token;

            this.setState({ formvalues: json })

            recaptchaRef.current.execute();

            // lets collect data
            /*const formdata = new FormData(event.target)

            const json = {}
            formdata.forEach(function(value, prop){
                json[prop] = value
            })*/

            //setValidated(false);
            this.setState({ validated: false })

            // reset form
            const form = event.target
            form.reset();



        }
    };

    selectChange = (event) => {
        this.setState({value: event.target.value});

        var ele_business_namediv = ReactDOM.findDOMNode(this.refs.namediv);
        if( 'events' === this.state.selectedInterest ) {
	        if ('Business' === (event.currentTarget.value)){
	            (ele_business_namediv.children[0]).setAttribute('placeholder', 'Contact Name');
	        }
	        else {
	            (ele_business_namediv.children[0]).setAttribute('placeholder', 'Name');
	        }
    	}

    }

    render() {

        var yesterday = Datetime.moment().subtract(1, 'day');
        var valid = function (current) {
            return current.isAfter( yesterday );
        };

        return (
            <> <div ref={myRef} />
                {this.state.showerror && <div className="alert-error">
                  <p>Highlighted fields are required/invalid</p>
                </div>}
                {this.state.showthankyou && <div className="alert-success">
                  <p>Thank you for contacting the Fox Club. A member of our team will contact you shortly.</p>
                </div>}
                
                <Form name="Contact Us" action="/thank-you/" method="post" noValidate validated={this.state.validated} onSubmit={this.handleSubmit} data-netlify="true" netlify-honeypot="bot-field" data-netlify-recaptcha="true">
                    <input type="hidden" name="form-name" value="Contact Us" />
                    <input type="hidden" name="bot-field" />
                    <section className="contact-form">
                        <ul className="list-inline mb-4">
                            <li className="list-inline-item">
                                <label className="radio-card">Rooms
                                    <input type="radio" name="interest_type" value="rooms" checked={this.state.selectedInterest === 'rooms'} onChange={this.handleInterestChange} />
                                    <span className="radio-mark"></span>
                                </label>
                            </li>
                            <li className="list-inline-item">
                                <label className="radio-card">Food
                                    <input type="radio" name="interest_type" value="food" checked={this.state.selectedInterest === 'food'} onChange={this.handleInterestChange} />
                                    <span className="radio-mark"></span>
                                </label>
                            </li>
                            <li className="list-inline-item">
                                <label className="radio-card">Event / Meeting
                                    <input type="radio" name="interest_type" value="events" checked={this.state.selectedInterest === 'events'} onChange={this.handleInterestChange} />
                                    <span className="radio-mark"></span>
                                </label>
                            </li>
                        </ul>

                        <div className={this.state.selectedInterest + ' one d-none mb-4 pb-2'}>
                            <div ref="arrivaldate">
								<Datetime value={this.state.formarrivaldate} input={true} className="form-date" isValidDate={valid} timeFormat={true} dateFormat="dddd, DD MMMM Y" inputProps={{ placeholder: 'Arrival Date', name: "arrival_date", required: "required" }} />
                            </div>
                        </div>
                        
                        <div className={this.state.selectedInterest + ' one d-none mb-4 pb-2'}>
                            <div ref="departuredate">
								<Datetime value={this.state.formdeparturedate} input={true} className="form-date" isValidDate={valid} timeFormat={true} dateFormat="dddd, DD MMMM Y" inputProps={{ placeholder: 'Departure Date', name: "departure_date", required: "required" }} />
                            </div>
                        </div>

                        <div ref="persontypediv" className={this.state.selectedInterest + ' three d-none mb-4 pb-2'}>
                            <select name="person_type" className="form-control select" onChange={this.selectChange}>
                                <option value="" selected="selected">Select Type</option>
                                <option value="Individual">Individual</option>
                                <option value="Business">Business</option>
                            </select>
                        </div>

                        <div ref="namediv" className="mb-4 pb-2">
                            <input type="text" onChange={this.handlechange} required="required" pattern="^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$" name="name" className="form-control" id="" placeholder="Name" />
                        </div>

                        <div className={this.state.value + ' mb-4 pb-2 d-none'}>
                            <input type="text" onChange={this.handlechange} pattern="^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$" name="businessname" className="form-control" id="" placeholder="Business Name" />
                        </div>

                        <div className="mb-4 pb-2">
                            <input type="email" onChange={this.handlechange} required="required" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" name="email" className="form-control" id="" placeholder="Email Address" />
                        </div>

                        <div ref="roomtypediv" className={this.state.selectedInterest + ' one d-none mb-4 pb-2'}>
                            <select required name="room_type" className="form-control select">
                                <option value="">Room Type</option>
                                <option value="Executive Single/Double">Executive Single / Double</option>
                                <option value="Club Suite Single">Club Suite Single</option>
                                <option value="Club Suite Double/Twin">Club Suite Double / Twin</option>
                                <option value="Club Suite Triple">Club Suite Triple</option>
                            </select>
                        </div>

                        <div ref="menutypediv" className={this.state.selectedInterest + ' two d-none mb-4 pb-2'}>
                            <select name="menu_type" className="form-control select">
                                <option value="" selected="selected">Menu Type</option>
                                <option value="Breakfast">Breakfast</option>
                                <option value="All day dining">All day dining</option>
                                <option value="Lunch/Dinner">Lunch / Dinner</option>
                                <option value="Drinks">Drinks</option>
                                <option value="Christmas event">Christmas event</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div ref="eventtypediv" className={this.state.selectedInterest + ' three d-none mb-4 pb-2'}>
                            <select name="event_type" className="form-control select">
                                <option value="" selected="selected">Event Type</option>
                                <option value="Meeting room">Meeting room – max 12 pax</option>
                                <option value="Drinks Function">Drinks Function Fox lounge and Bar  - max 70 pax</option>
                                <option value="Private Lunch/Dinner">Private Lunch / Dinner Fox lounge - max 24 / 30 pax</option>
                                <option value="Special Occasion">Special Occasion</option>
                                <option value="Product/Book Launch">Product / Book Launch</option>
                                <option value="Networking Event">Networking Event - max 30 pax</option>
                                <option value="Afternoon Tea">Afternoon Tea</option>
                                <option value="Christmas Parties">Christmas Parties</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div ref="preferreddatediv" className={this.state.selectedInterest + ' two three d-none mb-4 pb-2'}>
							<Datetime value={this.state.formpreferreddate} name="preferred_date" input={ true } className="form-date" isValidDate={ valid } timeFormat={true} dateFormat="dddd, DD MMMM Y" inputProps={{ placeholder: 'Time and Date', name:"preferred_date" }} />
                        </div>

                        <div ref="numbersdiv" className={this.state.selectedInterest + ' two three d-none mb-4 pb-2'}>
                            <input type="text" onChange={this.handlechange} name="numbers" className="form-control" id="" placeholder="Number/s" />
                        </div>

                        <div className="mb-4 pb-2">
                            <input type="text" onChange={this.handlechange} required="required" pattern="^[+]*[0-9-()]+(\s+[0-9-()]+)*$" name="phone" className="form-control" id="" placeholder="Contact Number" />
                        </div>

                        <div ref="roomsdiv" className={this.state.selectedInterest + ' one d-none mb-4 pb-2'}>
                            <select required name="rooms" className="form-control select">
                                <option value="" selected="selected">Number of Rooms</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div ref="adultsdiv" className={this.state.selectedInterest + ' one d-none mb-4 pb-2'}>
                            <select required name="adults" className="form-control select">
                                <option value="" selected="selected">Number of Adults</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className={this.state.selectedInterest + ' one d-none mb-4 pb-2'}>
                            <select name="childrens" className="form-control select">
                                <option value="" selected="selected">Number of Children</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="mb-4 pb-2">
                            <textarea placeholder="Message" name="message" className="form-control" rows="3"></textarea>
                        </div>

                        <div className="mb-4 pb-2">
                            <label className="check-card mb-4 pb-2">Are you a Member?
                                <input type="checkbox" name="member" value="" />
                                <span className="check-mark"></span>
                            </label>

                            <label className="check-card mb-4 pb-2">Subscribe to our newsletter
                                <input type="checkbox" name="subscription" value="" />
                                <span className="check-mark"></span>
                            </label>

                            <label className="check-card mb-4 pb-2">Please confirm your consent to your data being used in accordance with our <Link to="/privacy-policy">privacy policy</Link> *
                                <input required="required" className="" type="checkbox" id="terms" name="terms" value="" />
                                <span className="check-mark"></span>
                            </label>
                        </div>

                        <div className="mb-4 pb-2">
                            <ReCAPTCHA ref={recaptchaRef} data-netlify-recaptcha="true" onVerify={this.handleonVerify} size="invisible" sitekey={process.env.GATSBY_RECAPTCHA_KEY} />{/*this suppose to be env*/}
                            <small>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</small>
                        </div>

                        <div className="mb-4 pb-2 d-none contact-latestnews">
                            <p>If you would like to hear more about the latest Fox Club news, please <Link to="/">click here</Link> and we will add you to our e-mailing list.</p>
                        </div>

                        <Button variant="" type="submit" className="btn contact-btn px-5 py-2">
                            Submit
                        </Button>
                        <input type="hidden" name="interest_type" value={this.state.interest_type} />
                    </section>
               </Form> 
            </>
        );
    }
}

export default ContactForm;