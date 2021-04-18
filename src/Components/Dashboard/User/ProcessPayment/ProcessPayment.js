import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IeXyWG303NuYA4GQVn55VUWr60N7xc91SAZab6wNpGrEXhCunbfnNMwnQF1nIj3JTQ2NGn5YZPpxhQwkkKwkmM200s2B5q9wp');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
                <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;