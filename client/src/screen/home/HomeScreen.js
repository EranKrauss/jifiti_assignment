import React, {useContext, useEffect, useState} from "react";
import {ApiContext} from "../../App";
import {ApplicationsTable} from "./ApplicationsTable";
import {Box, Container, Divider} from "@mui/material";
import Title from "../../layout/Title";
import './HomeScreen.css';

export const HomeScreen = () => {
    const [data, setData] = useState(undefined);
    const api = useContext(ApiContext);

    useEffect(() => {
        api.getApplications()
            .then(res => setData(res))
            .catch(err => console.error('HomeScreen  >  useEffect  >  err details: ', err.message))
    }, []);


    return <Container className={'container'}>
        <div>
            <Title title={'Eran Krauss Solution For JIFITI'}/>
            <Divider/>
        </div>
        <Box className={'table'}>
            <ApplicationsTable data={data}/>
        </Box>
    </Container>
}
