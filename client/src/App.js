import React, {createContext} from "react";
import {HomeScreen} from "./screen/home/HomeScreen";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import {ApplicationDetailsScreen} from "./screen/appDetails/ApplicationDetailsScreen";
const {createApiClient} =  require("./api");

export const ApiContext = createContext();

function App() {
  return (
      <ApiContext.Provider value={createApiClient()}>
        <Router>
          <div>
            <Routes>
              <Route exact path="/" element={<HomeScreen/>}/>
              <Route path="/details" element={<ApplicationDetailsScreen/>}/>
            </Routes>
          </div>
        </Router>
  </ApiContext.Provider>
  );
}

export default App;
