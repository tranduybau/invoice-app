// /* eslint-disable no-param-reassign */
// /* eslint-disable prefer-object-spread */
// import axios from 'axios';
// import typeError from '@/constant';
// import router from '@/router';

// import { getToken } from './auth';
// import camelcaseKeys from './camelcaseKeys';
// import snakeCaseKeys from './snakeCaseKeys';

// const service = axios.create({
//   baseURL: process.env.VUE_APP_BASE_API,
//   timeout: 30000,
// });

// function unauthenticated(error) {
//   if (error.response.data.error_code === typeError.UNAUTHENTICATED) {
//     // TODO SOMETHING
//   }
// }

// function recordNotFound(error) {
//   if (error.response.data.error_code === typeError.RECORD_NOT_FOUND) {
//     router.push({ path: '/page-not-found' });
//   }
// }

// function unauthorizedError(error) {
//   if (error.response.data.error_code === typeError.UNAUTHENTICATED) {
//     // TODO SOMETHING
//   }
// }

// function badRequest(error) {
//   if (error.response.data.error_code === typeError.BAD_REQUEST) {
//     // TODO SOMETHING
//   }
// }

// function crashError(error) {
//   if (error.response.status === typeError.CRASH_ERROR) {
//     router.push({ path: '/server-error' });
//   }
// }

// service.interceptors.request.use(
//   (config) => {
//     const token = getToken();
//     if (token) {
//       config.headers['X-Access-Token'] = `Bearer ${token}`;
//     }
//     if (process.env.VUE_APP_BASIC_USER_NAME && process.env.VUE_APP_BASIC_PASSWORD) {
//       config.auth = {
//         username: process.env.VUE_APP_BASIC_USER_NAME,
//         password: process.env.VUE_APP_BASIC_PASSWORD,
//       };
//     }
//     if (config.data) {
//       config.data = snakeCaseKeys(config.data);
//     }
//     config.headers['Access-Control-Allow-Origin'] = '*';

//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   },
// );

// service.interceptors.response.use(
//   (response) => {
//     if (response.data) {
//       return camelcaseKeys(response.data);
//     }
//     return response;
//   },
//   (error) => {
//     if (!error.response) throw Object.assign({ error_code:
// typeError.REQUEST_ERROR, message: 'Something went wrong!' });
//     if (error.response && crashError(error)) throw error.response.data;
//     if (error.response && badRequest(error)) throw error.response.data;
//     if (error.response && unauthenticated(error)) throw error.response.data;
//     if (error.response && recordNotFound(error)) throw error.response.data;
//     if (error.response && unauthorizedError(error)) throw error.response.data;

//     throw error.response.data;
//     // return Promise.reject(error);
//   },
// );

// export default service;
