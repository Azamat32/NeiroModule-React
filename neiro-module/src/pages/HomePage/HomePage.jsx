import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./HomePage.scss";
import arrow_left from "../../assets/img/arrow_left.svg";
import arrow_right from "../../assets/img/arrow_right.svg";
import arrow from "../../assets/img/arrow.svg";
import Header from "../../components/Header/Header";
function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
function HomePage() {
  const [value, setValue] = React.useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [tests, setTests] = useState(require("../../data/data.json"));
  const [sortOrder, setSortOrder] = useState("asc");
  const itemsPerPage = 8;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = tests.slice(startIndex, endIndex);
  const handlePageChange = (direction) => {
    if (direction === "next" && endIndex < tests.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else if (direction === "prev" && startIndex > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

 
  const sortByProperty = (property) => {
    const sortedTests = [...tests];
    sortedTests.sort((a, b) => {
      if (a[property] < b[property]) {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (a[property] > b[property]) {
        return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });
    setTests(sortedTests);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
  let clientTable = currentData.map(function (item, i) {
    return (
      <div className="client_table" key={i}>
        <div className="client_table_row ">
          <div className="client_table_row_item">{item.id}</div>
          <div className="client_table_row_item">{item.name}</div>
          <div className="client_table_row_item">{item.DateStart}</div>
          <div className="client_table_row_item">{item.DateEnd}</div>
          <div className="client_table_row_item">{item.count}</div>
        </div>
      </div>
    );
  });
  let Historytable = currentData.map(function (item, i) {
    return (
      <div className="client_table" key={i}>
        <div className="client_table_row ">
          <div className="client_table_row_item">{item.name}</div>
          <div className="client_table_row_item">{item.DateEnd}</div>
        </div>
      </div>
    );
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="homePage">
      <div className="homePage_inner">
        <Header   text="Тестирование сотрудников" />
        <div className="homePage_tab">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Запланированные тестирования" />
                <Tab label="История тестирования" />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <div className="tabPanelInner">
                <div className="tabPanelInner_header">
                  <span
                    onClick={() => sortByProperty("id")}
                    className="tabPanelInner_header_first"
                  >
                    Номер заявки <img src={arrow} alt="" />
                  </span>
                  <span onClick={() => sortByProperty("name")}>
                    Наименование теста <img src={arrow} alt="" />
                  </span>
                  <span onClick={() => sortByProperty("DateStart")}>
                    Дата начала тестирования <img src={arrow} alt="" />
                  </span>
                  <span onClick={() => sortByProperty("DateEnd")}>
                    Дата окончания тестиро… <img src={arrow} alt="" />
                  </span>
                  <span onClick={() => sortByProperty("count")}>
                    Кол-во тестируемых <img src={arrow} alt="" />
                  </span>
                </div>
                <div className="tabPanelInner_header_wrap">{clientTable}</div>
                <div className="tabPanel_Navigation">
                  <span className="lenArr">
                    Строк на странице: {currentData.length}
                  </span>
                  <span>
                    {startIndex + 1}-{endIndex} of {tests.length}
                  </span>
                  <div className="tabPanel_Navigation_button">
                  <span onClick={() => handlePageChange("prev")}>
                      <img src={arrow_left} alt="" />
                    </span>
                    <span onClick={() => handlePageChange("next")}>
                      <img src={arrow_right} alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div className="tabPanelInner">
                <div className="tabPanelInner_header">
                  <span
                    onClick={() => sortByProperty("id")}
                    className="tabPanelInner_header_first"
                  >
                    Номер заявки <img src={arrow} alt="" />
                  </span>

                  <span onClick={() => sortByProperty("DateEnd")}>
                    Дата окончания тестиро… <img src={arrow} alt="" />
                  </span>
                </div>
                <div className="tabPanelInner_header_wrap">{Historytable}</div>
                <div className="tabPanel_Navigation">
                  <span className="lenArr">
                    Строк на странице: {currentData.length}
                  </span>
                  <span>
                    {startIndex + 1}-{endIndex} of {tests.length}
                  </span>
                  <div className="tabPanel_Navigation_button">
                    <span onClick={() => handlePageChange("prev")}>
                      <img src={arrow_left} alt="" />
                    </span>
                    <span onClick={() => handlePageChange("next")}>
                      <img src={arrow_right} alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
