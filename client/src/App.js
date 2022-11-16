import React, {createContext} from "react";
import {HomeScreen} from "./screen/home/HomeScreen";
const {createApiClient} =  require("./api");

export const ApiContext = createContext();

function App() {
  return (
      <ApiContext.Provider value={createApiClient()}>
    <HomeScreen/>
  </ApiContext.Provider>
  );
}

export default App;
