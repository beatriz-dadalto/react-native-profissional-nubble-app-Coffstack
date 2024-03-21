import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer NQ.x-nNxt9_e8XWent0cDyP8SoCWqss70v-P1pO8L6nAGvS9PK-hCnm7cWiuWJn',
  },
});
