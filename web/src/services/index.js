import axios from "axios";

export const API_URL = `http://localhost:5000/api`;
// створення з`єднання с сервером
const $api = axios.create({
  baseURL: API_URL
});

export default $api;