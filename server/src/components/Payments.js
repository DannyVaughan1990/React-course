import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
    render() {
        return (
            <StripeCheckout 
            amount={500}
            token={token => console.log(token)}
            stripeKey={process.env.REACT_APP_KEY}
            ></StripeCheckout>
        );
    }
}

export default Payments;