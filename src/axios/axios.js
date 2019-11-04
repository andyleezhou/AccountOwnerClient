import axios from "axios";

const instance = axios.create({
    baseURL: 'http://pacific-meadow-89341.herokuapp.com',
    headers: {
        headerType: 'example header type'
    }
});

export default instance;