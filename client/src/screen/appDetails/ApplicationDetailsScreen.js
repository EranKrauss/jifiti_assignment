import React, {useContext, useEffect, useState} from "react";
import {ApplicationsTable} from "./AppDetailsTable";
import {ApiContext} from "../../App";
import {useLocation} from "react-router-dom";
import Title from "../../layout/Title";
import {Box, Container, Divider} from "@mui/material";

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
        <Container className={'container'}>
            <div>
                <Title title={`${id} ${firstName} ${lastName}`}/>
                <Divider/>
            </div>
            <Box className={'table'}>
                <ApplicationsTable data={data}/>
            </Box>
        </Container>
    );
};
