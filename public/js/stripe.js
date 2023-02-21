import axios from 'axios';
import { showAlert } from './alerts';
// const stripe = window.Stripe(
//   'pk_test_51McmHkISQMiXBqcXYzUlzbA9QhR2rFtMrCa3oN9syUGLhpuNQ8pePjUEVRTa2qmbhljbx2MCn6XbDk2xYPEyRehb00CIrE9QA6'
// );
const stripe = require('stripe')(
  'pk_test_51McmHkISQMiXBqcXYzUlzbA9QhR2rFtMrCa3oN9syUGLhpuNQ8pePjUEVRTa2qmbhljbx2MCn6XbDk2xYPEyRehb00CIrE9QA6'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', "Redirect to checkout page don't work right now");
  }
};
