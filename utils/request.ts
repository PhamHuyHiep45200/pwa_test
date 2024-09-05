interface FetchOptions {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"; // HTTP method: 'GET', 'POST', 'PUT', etc.
  headers?: HeadersInit; // Headers object, e.g., {'Content-Type': 'application/json'}
  body?: BodyInit | null; // Request body: string, FormData, Blob, etc.
  mode?: RequestMode; // 'cors', 'no-cors', 'same-origin'
  credentials?: RequestCredentials; // 'omit', 'same-origin', 'include'
  cache?: RequestCache; // 'default', 'no-store', 'reload', 'no-cache', 'force-cache', 'only-if-cached'
  redirect?: RequestRedirect; // 'follow', 'manual', 'error'
  referrer?: string; // Referrer URL
  referrerPolicy?: ReferrerPolicy; // 'no-referrer', 'no-referrer-when-downgrade', etc.
  integrity?: string; // Subresource Integrity
  keepalive?: boolean; // Keep the request alive for a longer period
  signal?: AbortSignal | null; // Signal object to allow request cancellation
  window?: any; // Not used, should be null
  params?: any
}

const fetchApi = async (url: string, options: FetchOptions = {}) => {
  let fullUrl = url
  if(options.params && Object.keys(options.params).length) {
    const queryString = new URLSearchParams(options.params).toString();
    fullUrl = `${url}?${queryString}`;
  }
  try {
    const res = await fetch(fullUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options.body),
      ...options
    })
    if (!res.ok) {
      return Promise.reject(res)
    }
    return await res.json()
  } catch (error) {
    return Promise.reject(error)
  }
};

const request = async (url: string, options?: FetchOptions) => {
  return fetchApi(url, options)
};

export default request;
