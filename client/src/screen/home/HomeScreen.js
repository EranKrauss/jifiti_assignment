import React, {useContext, useEffect, useState} from "react";
import {ApiContext} from "../../App";
import {ApplicationsTable} from "./ApplicationsTable";

export const HomeScreen = () => {
    const [data, setData] = useState(undefined);
    const api = useContext(ApiContext);

    useEffect(() => {
        console.log(444)
        api.getApplications()
            .then(res => setData(res))
            .catch(err => console.error('HomeScreen  >  useEffect  >  err details: ', err.message))
    }, []);


    return <div>
        <div>Header</div>
        <ApplicationsTable data={data}/>
    </div>
}
