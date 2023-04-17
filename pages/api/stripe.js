// This is your test secret API key.

import Stripe from 'stripe';


const stripe =new Stripe(process.env.STRIPE_SECRET_KEY);


const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client


};

export default async function handler(req, res) {

  if (req.method === 'POST') { 
try{

     const { items } = req.body;

  const params={
    submit_type: 'pay',
    mode: 'payment',
    payment_method_types: ['card'],
    billing_address_collection: 'auto',
    shipping_options:[
       { shipping_rate:"shr_1MwcdAGjN7TD4Dc0wRB8JvUI"},
       { shipping_rate:"shr_1MxPCZGjN7TD4Dc09xHiOehL"},
    ],
    line_items: req.body.map((item) => {
      const img = item.image[0].asset._ref;
      const newImage = img.replace('image-', 'https://cdn.sanity.io/images/mhyqhff8/production/').replace('-webp', '.webp');

      return {
        price_data: { 
          currency: 'usd',
          product_data: { 
            name: item.name,
            images: [newImage],
          },
          unit_amount: item.price * 100,
        },
        adjustable_quantity: {
          enabled:true,
          minimum: 1,
        },
        quantity: item.quantity
      }
    }),
    success_url: `${req.headers.origin}/Success`,
    cancel_url: `${req.headers.origin}/Canceled`,
  
    // amount: calculateOrderAmount(items),
    // currency: "eur",
    // automatic_payment_methods: {
    //   enabled: true,
    // },
  }



  // Create a PaymentIntent with the order amount and currency
  const session = await stripe.checkout.sessions.create(params);

  res.status(200).json(session);
} catch (err) {
  res.status(err.statusCode || 500).json(err.message);
}
} else {
res.setHeader('Allow', 'POST');
res.status(405).end('Method Not Allowed');
}
}
