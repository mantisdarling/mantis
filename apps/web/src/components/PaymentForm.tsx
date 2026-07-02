'use client';

import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_placeholder_key_for_mantis_mvp');

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) return;

    const result = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (result.error) {
      setError(result.error.message || 'Payment failed');
    } else {
      console.log('Payment successful, token:', result.paymentMethod);
      alert('Mock payment successful!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-2">Card Information</label>
        <div className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-4">
          <CardElement options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#fafafa',
                '::placeholder': {
                  color: '#a1a1aa',
                },
              },
              invalid: {
                color: '#ef4444',
              },
            },
          }} />
        </div>
      </div>
      
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}

      <button type="submit" disabled={!stripe} className="w-full bg-indigo-600 text-white font-bold rounded-xl px-4 py-4 mt-6 hover:bg-indigo-700 transition-colors shadow-[0_0_20px_rgba(79,70,229,0.3)] disabled:opacity-50">
        Pay $155.00
      </button>
    </form>
  );
}

export default function PaymentForm() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}
