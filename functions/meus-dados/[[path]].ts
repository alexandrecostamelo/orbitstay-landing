// Cloudflare Pages Function: proxia o Portal do Titular de Dados (LGPD) que é
// servido pela API (Next.js em api.orbitstay.com.br), mantendo a URL bonita
// orbitstay.com.br/meus-dados. Cobre /meus-dados e /meus-dados/*.
// Os assets (/_next) e os endpoints (/api/public/data-subject) têm proxies próprios.

const API_ORIGIN = "https://api.orbitstay.com.br";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const onRequest = async (context: any): Promise<Response> => {
  const { request } = context;
  const url = new URL(request.url);
  const target = `${API_ORIGIN}${url.pathname}${url.search}`;

  // Repassa sem o Host original (deixa o fetch definir o Host do destino).
  const headers = new Headers(request.headers);
  headers.delete("host");

  const init: RequestInit = {
    method: request.method,
    headers,
    redirect: "manual",
  };
  if (request.method !== "GET" && request.method !== "HEAD") {
    init.body = request.body;
  }

  const res = await fetch(target, init);
  return new Response(res.body, { status: res.status, headers: res.headers });
};
