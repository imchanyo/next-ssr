import axios from "axios";

const headers = { "X-Requested-With": "XMLHttpRequest" };

const client = axios.create({ baseURL: "http://localhost:3000" });

client.interceptors.request.use((req) => {
  console.log(10, req);
  return req;
});

client.interceptors.response.use((res) => {
  console.log(16, res.data);
  return res.data;
});

type METHOD = "GET" | "POST" | "DELETE" | "PUT";

type promiseProps = {
  method: METHOD;
  uri: string;
  payload: any;
  options?: any;
};

//
// const getPromise = ({ configInfo } : promiseProps) : Promise<number> => {
//         const {method, uri, payload, options} = configInfo
//     return Promise.resolve(42)
//     const config = {
//         method: method,
//         url: uri,
//         ...options,
//         headers: {
//             ...headers,
//             ...(options && options.headers),
//         },
//     }
//     return axios(config).then(response => {
//         if (response) {
//             return Promise.resolve(response.data)
//         }
//     }).catch(error => {
//         if (error.response && error.response.status === 401) {
//             return
//         }
//         return Promise.reject(error)
//     })
// }
//
//
// export default getPromise;
