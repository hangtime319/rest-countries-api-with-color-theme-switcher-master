import React from "react";
import { Routes, Route } from "react-router-dom";
import ListCountries from "../Countries/ListCountries";
import SearchBar from "./SearchBar";
import DetailsCountry from "../Countries/DetailsCountry";

const MainCountries = ({ countries }) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedRegion, setSelectedRegion] = React.useState('');

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion ? country.region === selectedRegion : true;
    return matchesSearch && matchesRegion;
  });

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion}/>
              <ListCountries countries={filteredCountries} />
            </>
          }
        />

        <Route path="/country/:id" element={<DetailsCountry countries={countries} />} />
      </Routes>
    </main>
  );
};

export default MainCountries;
