export default async (req) => {
  try {
    const res = await fetch('https://www.mortgagenewsdaily.com/mortgage-rates');
    if (!res.ok) return new Response('upstream error', { status: 502 });
    const html = await res.text();
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=3600',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (e) {
    return new Response('fetch failed', { status: 502 });
  }
};

export const config = { path: '/api/rates' };
