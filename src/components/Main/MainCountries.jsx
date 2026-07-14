import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ListCountries from "../Countries/ListCountries";
import SearchBar from "./SearchBar";

const LazyDetailsCountry = lazy(() => import("../Countries/DetailsCountry"));

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

        <Route
          path="/country/:id"
          element={
            <Suspense fallback={<p className="mt-8 px-12 text-base">Loading country...</p>}>
              <LazyDetailsCountry countries={countries} />
            </Suspense>
          }
        />
      </Routes>
    </main>
  );
};

export default MainCountries;
