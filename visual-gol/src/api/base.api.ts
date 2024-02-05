// Aquí estoy intentando acceder a la url
// base.api.ts

import axios from "axios";

const BASE_URL = "http://localhost:8081/api/";

export const instance = axios.create({
    baseURL: BASE_URL
})