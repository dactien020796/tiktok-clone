import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tiktok-clone-tienle0207.herokuapp.com/'
});

export default instance;