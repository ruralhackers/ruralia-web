import Stripe from 'stripe';

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let room;
  try {
    ({ room } = JSON.parse(event.body || '{}'));
  } catch {
    return { statusCode: 400, body: 'Bad Request' };
  }

  if (!['compartida', 'individual'].includes(room)) {
    return { statusCode: 400, body: 'Tipo de habitación inválido' };
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  const priceId = process.env.STRIPE_PRICE_DEPOSIT;

  if (!secretKey || !priceId) {
    return {
      statusCode: 503,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Stripe no configurado. Revisa las variables de entorno.' }),
    };
  }

  // Netlify pone URL automáticamente en producción; en local usamos localhost
  const siteUrl = process.env.URL || 'http://localhost:8888';
  const roomLabel = room === 'compartida' ? 'Habitación compartida' : 'Habitación individual';

  const stripe = new Stripe(secretKey);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${siteUrl}/gracias/`,
      cancel_url: `${siteUrl}/residencia-ia-galicia/#pricing`,
      locale: 'es',
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      custom_text: {
        submit: {
          message: `Reserva para ${roomLabel}. El resto del importe se facturará antes de la llegada.`,
        },
      },
      metadata: { room_type: room },
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: session.url }),
    };
  } catch (err) {
    console.error('Stripe error:', err.message);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: 'Error al crear la sesión de pago.' }),
    };
  }
};
