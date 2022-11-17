import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../App";
import { ApplicationsTable } from "./ApplicationsTable";
import { Box, Container, Divider, TextField } from "@mui/material";
import Title from "../../layout/title/Title";
import "./HomeScreen.css";
import SearchIcon from "@mui/icons-material/Search";
import { debounce } from "lodash";

export const HomeScreen = () => {
  const [data, setData] = useState(undefined);
  const [filteredData, setFilteredData] = useState(undefined);
  const [showSearch, setShowSearch] = useState(false);
  const api = useContext(ApiContext);

  useEffect(() => {
    api
      .getApplications()
      .then((res) => {
        setData(res);
        setFilteredData(res);
      })
      .catch((err) =>
        console.error("HomeScreen  >  useEffect  >  err details: ", err.message)
      );
  }, []);

  const handleTextChange = (event) => {
    event.preventDefault();
    const txt = event.target.value.toString().toLowerCase();
    const newData = data.filter((currData) => {
      const { id, firstName, lastName } = currData;
      return (
        id.toString().toLowerCase().indexOf(txt) !== -1 ||
        firstName.toLowerCase().indexOf(txt) !== -1 ||
        lastName.toLowerCase().indexOf(txt) !== -1
      );
    });
    setFilteredData(newData);
  };

  const handleTextChangeDebounce = debounce(handleTextChange, 300);

  return (
    <Container className={"container"}>
      <div>
        <Title title={"Eran Krauss Solution For JIFITI"} />
        <Divider />
      </div>
      <div className="search">
        {showSearch ? (
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Search"
            onChange={handleTextChangeDebounce}
          />
        ) : (
          <SearchIcon onClick={() => setShowSearch(true)} />
        )}
      </div>
      <Box className={"table"}>
        <ApplicationsTable data={filteredData} />
      </Box>
    </Container>
  );
};
