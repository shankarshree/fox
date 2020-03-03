import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './assets/styles/_index.scss';

function FormWork(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(

                        <Container>
                            <Row>
                                <Col lg={6}>
                                    <div className="mb-5">
                                        <input type="text" value={props.businessname} onChange={props.handleChange} name="businessname" pattern="^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$" required className="form-control" id="" placeholder="Business Name" />
                                    </div>

                                    <div className="mb-5">
                                        <input type="text" value={props.business_address} onChange={props.handleChange} name="business_address" required className="form-control" id="" placeholder="Address Line 2" />
                                    </div>

                                    <div className="mb-5">
                                        <input type="text" value={props.business_postcode} onChange={props.handleChange} name="business_postcode" required className="form-control" id="" placeholder="Postcode" />
                                    </div>

                                    <div className="mb-5">
                                        <input type="text" value={props.business_telephone} onChange={props.handleChange} pattern="^[+]*[0-9-()]+(\s+[0-9-()]+)*$" name="business_telephone" required className="form-control" id="" placeholder="Telephone" />
                                    </div>

                                    <div className="mb-5">
                                        <textarea name="hear_about" value={props.hear_about} onChange={props.handleChange} placeholder="How did you hear about us?" className="form-control" rows="6"></textarea>
                                    </div>

                                    <p className="mb-5">We care about your privacy here at The Fox Club London. Where would you prefer your email or post to be sent?</p>

                                    <div className="mb-5">
                                        <ul className="list-inline">
                                            <li className="list-inline-item mr-5">
                                                <label className="check-card">Business
                                                    <input type="checkbox" name="business_member" defaultChecked={props.business_member === 'yes'} value="yes" onClick={props.handleChange} />
                                                    <span className="check-mark"></span>
                                                </label>
                                            </li>
                                            <li className="list-inline-item">
                                                <label className="check-card">Home
                                                    <input type="checkbox" name="home_member" defaultChecked={props.home_member === 'yes'} value="yes" onClick={props.handleChange} />
                                                    <span className="check-mark"></span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>

                                <Col lg={6}>
                                    <div className="mb-5">
                                        <input type="text" value={props.business_street_address} onChange={props.handleChange} name="business_street_address" required className="form-control" id="" placeholder="Street Address" />
                                    </div>

                                    <div className="mb-5">
                                        <input type="text" value={props.business_city} onChange={props.handleChange} name="business_city" required className="form-control" id="" placeholder="City" />
                                    </div>

                                    <div className="mb-5">
                                        <input type="text" value={props.business_country} onChange={props.handleChange} name="business_country" required className="form-control" id="" placeholder="Country" />
                                    </div>

                                    <div className="mb-5">
                                        <input type="email" value={props.business_email} onChange={props.handleChange} name="business_email" required className="form-control" id="" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Email Address" />
                                    </div>

                                    <div className="mb-5">
                                        <textarea name="current_member" value={props.current_member} onChange={props.handleChange} placeholder="Have you been nominated by a current member? (If so please give details)" className="form-control" rows="6"></textarea>
                                    </div>
                                </Col>
                            </Row>

                        </Container>
            );
}

export default FormWork;