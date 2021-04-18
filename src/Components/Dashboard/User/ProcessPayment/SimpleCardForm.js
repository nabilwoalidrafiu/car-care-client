import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const SimpleCardForm = ({handlePayment}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentSuccess, setPaymentSuccess] = useState(null)
  const [paymentError, setPaymentError] = useState(null)
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
      setPaymentError(error.message)
      setPaymentSuccess(null)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setPaymentSuccess(paymentMethod)
      setPaymentError(null)
      handlePayment(paymentMethod)
    }
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}  className="btn btn-success center-block mt-2 mb-2">
          Pay
        </button>
        </form>
        {
          paymentError && <p style={{color: 'red'}}>{paymentError}</p>
        }
        {
          paymentSuccess && <p style={{color: 'green'}}>Payment is Successful</p>
        }
    </div>
  );
};
export default SimpleCardForm;