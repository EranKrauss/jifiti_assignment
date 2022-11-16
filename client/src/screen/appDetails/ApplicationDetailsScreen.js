import React, {useContext, useEffect, useState} from "react";
import {ApplicationsTable} from "./AppDetailsTable";
import {ApiContext} from "../../App";

export const ApplicationDetailsScreen = (props) => {
    const {appId, firstName, lastName} = props.app;
    const [data, setData] = useState();
    const apiCtx = useContext(ApiContext);

    useEffect(() => {
        apiCtx.getDataForAppId(appId)
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
            <div>{`${appId}   ${firstName}   ${lastName}`}</div>
            <ApplicationsTable/>
        </div>
    )
};
