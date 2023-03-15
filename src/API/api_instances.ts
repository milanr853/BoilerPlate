import axios from "axios";

const endpoint = 'https://fakestoreapi.com/'

const data_instance = axios.create({
    baseURL: endpoint,
    timeout: 3000,
});

export { data_instance }