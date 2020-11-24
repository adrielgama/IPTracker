// Key = at_povLdCez9qiZB5HqCbXwDzPzOYvpa

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://geo.ipify.org/api/v1?apiKey=at_povLdCez9qiZB5HqCbXwDzPzOYvpa&ipAddress='
});

export default api;