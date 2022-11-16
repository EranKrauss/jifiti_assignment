import axios from "axios";
// import Axios = require("axios").Axios;
const BASE_URL = 'http://localhost:3000';

const getApplications = async () => {
    console.log('CLIENT API - getApplications')
    return (axios.get(`${BASE_URL}/app`)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                console.error('api  >  getApplications  >  err details: ', err.message)
            })
    );
};
const getCards = (appId) => {
    console.log('CLIENT API - getCards')
    return (axios.get(`${BASE_URL}/cards?appId=${appId}`)
            .then(res => res)
            .catch(err => {
                console.error('api  >  getCards  >  err details: ', err.message)
            })
    );
};
const getTrans = (appId) => {
    console.log('CLIENT API - getTrans')
    return (axios.get(`${BASE_URL}/trans?appId=${appId}`)
            .then(res => res)
            .catch(err => {
                console.error('api  >  getTrans  >  err details: ', err.message)
            })
    );
};

export const createApiClient = () => {
    return {
        getApplications,
        getCards,
        getTrans
    };
}



