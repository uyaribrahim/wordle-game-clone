import axios from 'axios';

const BASE_URL = 'https://sozluk.gov.tr';

export const apiService = axios.create({baseURL: BASE_URL});
