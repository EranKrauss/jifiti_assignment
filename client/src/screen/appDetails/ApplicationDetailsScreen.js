import React, {useContext, useEffect, useState} from "react";
import {ApplicationsTable} from "./AppDetailsTable";
import {ApiContext} from "../../App";
import {useLocation} from "react-router-dom";

export const ApplicationDetailsScreen = (props) => {
    const state = useLocation();
    const {id, firstName, lastName} = state.state.data;
    const [data, setData] = useState();
    const apiCtx = useContext(ApiContext);


    useEffect(() => {
        apiCtx.getDataForAppId(id)
            .then(res => setData(res))
            .catch(err => console.error('ApplicationDetailsScreen  >  useEffect  >  error details: '. err.message))
    }, []);

    if(!data){
        return <div>
            loading
        </div>
    }


    return (
        <div>
            <div>{`${id}   ${firstName}   ${lastName}`}</div>
            <ApplicationsTable data={data}/>
        </div>
    )
};
