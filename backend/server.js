const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Initialize Stripe
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Initialize Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

const app = express();
app.use(cors());
app.use(express.json());

// Stripe Checkout Session Endpoint
app.post('/create-checkout-session', async (req, res) => {
  const { priceId } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Example Supabase Endpoint
app.get('/fetch-data', async (req, res) => {
  try {
    const { data, error } = await supabase.from('your_table_name').select('*');
    if (error) throw error;

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Example Supabase Insert Endpoint
app.post('/insert-data', async (req, res) => {
  const { column1, column2 } = req.body;

  try {
    const { data, error } = await supabase
      .from('your_table_name')
      .insert([{ column1, column2 }]);
    if (error) throw error;

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));