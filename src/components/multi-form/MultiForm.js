import React, { Component } from 'react';
import FormPersonal from './FormPersonal';
import FormWork from './FormWork';
import FormMembership from './FormMembership';
import FormSuccess from './FormSuccess';
import './assets/styles/_index.scss';

export class MultiForm extends React.Component {

    state = {
        step: 1
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }
    
    render () {

        const {step} = this.state;

        switch(step) {
            case 1:
                return <FormPersonal 
                        nextStep={this.nextStep}
                        />
            case 2:
                return <FormWork 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        />
            case 3:
                return <FormMembership 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        />
            case 4:
                return <FormSuccess />
        }
    }
}

export default MultiForm;