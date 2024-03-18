import axios from 'axios';

const client = axios.create({
  baseURL: process.env.API_URL,
});

client.interceptors.request.use(
  async (config) => {
    const token = 'token';

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const requestsToRefresh: any = [];
let isRefreshToken = false;

client.interceptors.response.use(
  (res) => res,
  (error) => {
    const { response, config } = error;
    const status = response?.status;

    if (status === 401) {
      if (!isRefreshToken) {
        isRefreshToken = true;

        // TODO: refresh token
      }

      return new Promise((resolve, reject) => {
        requestsToRefresh.push((token: string) => {
          if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            resolve(client(config));
          }

          reject(error);
        });
      });
    }
    return Promise.reject(error);
  }
);

export default client;
