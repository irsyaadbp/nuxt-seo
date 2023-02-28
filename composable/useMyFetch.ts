type RequestUrl = string | (() => string);

export const useMyFetch = (request: RequestUrl, opts: object) => {
  const config = useRuntimeConfig();

  return useFetch(request, { baseURL: config.public.baseURL, ...opts });
};
