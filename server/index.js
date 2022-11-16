const Axios = require("axios");
const express = require('express');
const app = express();
const port = 3000;
const baseUrl = 'https://rpnszaidmg.execute-api.eu-west-1.amazonaws.com/Prod';
const authKey = '9874654654987654658';
const cors = require('cors')

app.use(cors())


app.get('/app', async (req, res) => {
    console.log('getApp');

    Axios.get(`${baseUrl}/applications`, {'headers': {'Authorization': authKey}})
        .then(({data}) => res.send(data))
        .catch(err => console.error('server  >  app  > err details: ', err.message))
});

app.get('/cards', (req, res) => {
    console.log('getCards');

    Axios.get(`${baseUrl}/cards?appId=${appId}`, {headers: {Authorization: authKey}})
        .then(({data}) => res.send(data))
        .catch(err => console.error('server  >  cards  > err details: ', err.message))
});

app.get('/trans', (req, res) => {
    console.log('getTrans');

    Axios.get(`${baseUrl}/trans?appId=${appId}`, {headers: {Authorization: authKey}})
        .then(({data}) => res.send(data))
        .catch(err => console.error('server  >  trans  > err details: ', err.message))
});



app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6
