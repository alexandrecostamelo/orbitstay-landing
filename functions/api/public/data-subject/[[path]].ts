// Proxia os endpoints públicos do Portal do Titular de Dados pra API, mantendo
// as chamadas do portal same-origin (orbitstay.com.br) — evita CORS.
const API_ORIGIN = "https://api.orbitstay.com.br";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const onRequest = async (context: any): Promise<Response> => {
  const { request } = context;
  const url = new URL(request.url);
  const headers = new Headers(request.headers);
  headers.delete("host");
  const init: RequestInit = { method: request.method, headers, redirect: "manual" };
  if (request.method !== "GET" && request.method !== "HEAD") {
    init.body = request.body;
  }
  const res = await fetch(`${API_ORIGIN}${url.pathname}${url.search}`, init);
  return new Response(res.body, { status: res.status, headers: res.headers });
};
