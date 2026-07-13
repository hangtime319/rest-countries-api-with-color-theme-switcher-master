import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import MainCountries from "./components/Main/MainCountries";
import data from "./data/data.json";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainCountries countries={data} />
    </BrowserRouter>
  );
};

export default App;
