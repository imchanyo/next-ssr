import { QueryClient } from "react-query";
import axios from "axios";

export const getClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    if (!client)
      client = new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      });
    return client;
  };
})();

const BASE_URL = "http://localhost:3000/";

export const fetcher = async ({ cursor }: any) => {
  console.log(26, cursor);
  return await axios.get(`${BASE_URL}products`).then((res) => res.data);
};

export const QueryKeys = {
  PRODUCTS: "PRODUCTS",
  CART: "CART",
};
