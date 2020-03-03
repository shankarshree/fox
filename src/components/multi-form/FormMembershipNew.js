import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "gatsby";
import './assets/styles/_index.scss';

function FormMembership(props) {
    if (props.currentStep !== 3) {
        return null
    }
    return (

        <Container>
            <Row className="mb-5">
                <Col lg={12}>
                    <p className="form-font">My Application is for the following membership</p>
                </Col>
            </Row>

            <Row>
                <Col lg={4} className="mb-4">
                    <label className="check-card">Mayfair Individual
                        <input type="checkbox" onClick={props.handleChange} defaultChecked={props.mayfair_individual === 'yes'} name="mayfair_individual" value="yes" />
                        <span className="check-mark"></span>
                    </label>
                    <p className="fox-textsmall mb-2 ml-4 pl-2">Annual Subscription: £595</p>
                    <p className="fox-textline ml-4 pl-2">+ £200 Joining fee</p>
                </Col>
                <Col lg={4} className="mb-4">
                    <label className="check-card">Mayfair Joint membership (2 pax)
                        <input type="checkbox" onClick={props.handleChange} defaultChecked={props.mayfair_joint === 'yes'} name="mayfair_joint" value="yes" />
                        <span className="check-mark"></span>
                    </label>
                    <p className="fox-textsmall mb-2 ml-4 pl-2">Annual Subscription: £595 +£200*</p>
                </Col>
                <Col lg={4} className="mb-4">
                    <label className="check-card">Mayfair Overseas
                        <input type="checkbox" onClick={props.handleChange} defaultChecked={props.mayfair_overseas === 'yes'} name="mayfair_overseas" value="yes" />
                        <span className="check-mark"></span>
                    </label>
                    <p className="fox-textsmall mb-2 ml-4 pl-2">Annual Subscription: £395</p>
                    <p className="fox-textline ml-4 pl-2">+ £150 Joining fee</p>
                </Col>
            </Row>

            <Row>
                <Col lg={4} className="mb-4">
                    <label className="check-card">Country Individual
                        <input type="checkbox" onClick={props.handleChange} defaultChecked={props.country_individual === 'yes'} name="country_individual" value="yes" />
                        <span className="check-mark"></span>
                    </label>
                    <p className="fox-textsmall mb-2 ml-4 pl-2">Annual Subscription: £495</p>
                    <p className="fox-textline ml-4 pl-2">+ £200 Joining fee</p>
                </Col>
                <Col lg={4} className="mb-4">
                    <label className="check-card">Country Joint membership (2 pax)
                        <input type="checkbox" onClick={props.handleChange} defaultChecked={props.country_joint === 'yes'} name="country_joint" value="yes" />
                        <span className="check-mark"></span>
                    </label>
                    <p className="fox-textsmall mb-2 ml-4 pl-2">Annual Subscription: £495 +£200*</p>
                </Col>
                <Col lg={4} className="mb-4">
                    <label className="check-card">Corporate
                        <input type="checkbox" onClick={props.handleChange} defaultChecked={props.corporate === 'yes'} name="corporate" value="yes" />
                        <span className="check-mark"></span>
                    </label>
                    <p className="fox-textsmall mb-2 ml-4 pl-2">Annual Subscription: £1995</p>
                </Col>
            </Row>

            <Row>
                <Col lg={4} className="mb-5">
                    <label className="check-card">SME Membership (3 pax)
                        <input type="checkbox" onClick={props.handleChange} defaultChecked={props.sme_membership === 'yes'} name="sme_membership" value="yes" />
                        <span className="check-mark"></span>
                    </label>
                    <p className="fox-textsmall mb-2 ml-4 pl-2">Annual Subscription: £995</p>
                </Col>
                <Col lg={4} className="mb-5">
                    <label className="check-card">Young Fox (Under 30)
                        <input type="checkbox" onClick={props.handleChange} defaultChecked={props.young_fox === 'yes'} name="young_fox" value="yes" />
                        <span className="check-mark"></span>
                    </label>
                    <p className="fox-textsmall mb-2 ml-4 pl-2">Annual Subscription: £250</p>
                </Col>
                <Col lg={4} className="mb-5">
                    <label className="check-card">Monthly Membership
                        <input type="checkbox" onClick={props.handleChange} defaultChecked={props.monthly_membership === 'yes'} name="monthly_membership" value="yes" />
                        <span className="check-mark"></span>
                    </label>
                    <p className="fox-textsmall mb-2 ml-4 pl-2">Monthly Subscription: £95</p>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col lg={12}>
                    <p className="form-mandatory">* On top of Individual Membership</p>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col lg={6}>
                    <p className="mb-5 pb-3">Preferred method of payment to The Fox Club Mayfair</p>

                    <select name="payment_method" required className="form-control select">
                        <option value="" selected="selected">Payment Method</option>
                        <option value="Standing Order">Standing Order</option>
                        <option value="Cheque">Cheque</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Cash">Cash</option>
                    </select>
                </Col>
            </Row>

            <Row className="mb-4">
                <Col lg={12} className="mb-5">
                    <p className="fox-textline">For Standing Order you will receive a mandate form and a yearly receipt.</p>
                </Col>

                <Col lg={12} className="mb-5 custom-control custom-checkbox">
                    <input required type="checkbox" id="membership_apply" name="membership_apply" className="custom-control-input" value="yes" />
                    <label title="" htmlFor="membership_apply" className="custom-control-label">
                        I hereby apply for Membership of The Fox Club London. I will join for one year from this date and my subscription will automatically renew per year after this date. Termination allowed with one month’s notice after the first year. I agree to be bound by the rules of the Club and any by-laws made or to be made in accordance therewith and to pay such joining fee and subscription as the club rules should require. *
                                </label>
                </Col>

                <Col lg={12} className="mb-5 pl-0">
                    <label className="check-card terms">Subscribe to our newsletter
                        <input type="checkbox" onClick={props.handleChange} defaultChecked={props.subscription === 'yes'} name="subscription" value="yes" />
                        <span className="check-mark"></span>
                    </label>
                </Col>

                <Col lg={12} className="mb-5 custom-control custom-checkbox">
                    <input required type="checkbox" id="terms-conditions" name="terms-conditions" className="custom-control-input" value="yes" />
                    <label title="" htmlFor="terms-conditions" className="custom-control-label">
                        Please confirm your consent to your data being used in accordance with our <Link to="/privacy-policy">privacy policy</Link> *
                                </label>
                </Col>

                <Col lg={12} className="mb-5">
                    <p className="fox-textline"><small>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</small></p>
                </Col>

            </Row>
        </Container>
    );
}

export default FormMembership;