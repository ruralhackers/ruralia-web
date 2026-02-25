import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  const { email } = await request.json();

  if (!email || !email.includes('@')) {
    return new Response(JSON.stringify({ error: 'Email inválido' }), { status: 400 });
  }

  const apiKey = import.meta.env.BREVO_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API key no configurada' }), { status: 500 });
  }

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify({
      email,
      listIds: [2],
      updateEnabled: true,
    }),
  });

  if (res.ok || res.status === 204) {
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }

  const err = await res.json().catch(() => ({}));
  return new Response(JSON.stringify({ error: err }), { status: 500 });
};
