import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mw.Eh5vd-CwrmuXBsTQRt_CNXNJylPqGWVf11NNALT7o4Wt_ohxZ29D3vduUIoH',
  },
});
