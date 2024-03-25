import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.i8Ew8M-raGNe-ODrpMFTYnH22yWhMe7fbqN1kmLA30P1ON3pXMAPSFbj2505',
  },
});
