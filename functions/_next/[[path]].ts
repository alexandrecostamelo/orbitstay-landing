// Proxia os assets do Next.js (/_next/*) do portal /meus-dados pra API.
// A landing Astro usa /_astro, então /_next é exclusivo do portal — seguro proxiar.
const API_ORIGIN = "https://api.orbitstay.com.br";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const onRequest = async (context: any): Promise<Response> => {
  const { request } = context;
  const url = new URL(request.url);
  const headers = new Headers(request.headers);
  headers.delete("host");
  const res = await fetch(`${API_ORIGIN}${url.pathname}${url.search}`, {
    method: request.method,
    headers,
    redirect: "manual",
  });
  return new Response(res.body, { status: res.status, headers: res.headers });
};
