import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';



class Payments extends Component {
    render() {
        return (
            <StripeCheckout
            name="Customer/Client Survey"
            description="£2.50 for 5 email credits" 
            amount={250}
            token={token => this.props.handleToken(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
            <button className="btn">
            Add credits
            </button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);