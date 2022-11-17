import axios from "axios";
const BASE_URL = "http://localhost:3000";

const getApplications = async () => {
  console.log("CLIENT API - getApplications");

  return axios
    .get(`${BASE_URL}/app`)
    .then((res) => res.data)
    .catch((err) =>
      console.error("api  >  getApplications  >  err details: ", err.message)
    );
};
const getDataForAppId = async (appId) => {
  console.log("CLIENT API - getDataForAppId");

  return axios
    .get(`${BASE_URL}/data?appId=${appId}`)
    .then((res) => res.data)
    .catch((err) =>
      console.error("api  >  getDataForAppId  >  err details: ", err.message)
    );
};

export const createApiClient = () => {
  return {
    getApplications,
    getDataForAppId,
  };
};
