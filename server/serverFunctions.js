const Axios =  require("axios").Axios;
const {baseUrl, authKey} = require('./appConfig.js');


const getApplications = async () => {
    return (Axios.get(`${baseUrl}/app`, {headers: {Authorization: authKey}})
            .then(res => res)
            .catch(err => {
                console.error('api  >  getApplications  >  err details: ', err.message)
            })
    );
};
const getCards = async (appId) => {
    return (Axios.get(`${baseUrl}/cards?appId=${appId}`, {headers: {Authorization: authKey}})
            .then(res => res)
            .catch(err => {
                console.error('api  >  getCards  >  err details: ', err.message)
            })
    );
};
const getTrans = async (appId) => {
    return (Axios.get(`${baseUrl}/trans?appId=${appId}`, {headers: {Authorization: authKey}})
            .then(res => res)
            .catch(err => {
                console.error('api  >  getTrans  >  err details: ', err.message)
            })
    );
};

const createDao = () => {
    return {
        getApplications,
        getTrans,
        getCards
    }
}

module.exports = createDao;

