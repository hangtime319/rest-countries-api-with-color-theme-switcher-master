import React from "react";
import { Link } from "react-router-dom";

const ListCountries = ({ countries }) => {

  if (!Array.isArray(countries) || countries.length === 0) {
    return <p className="text-center mt-10 text-lg">Country not found</p>;
  }

  return (
    <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-20 px-12 py-4 *:shadow-sm *:rounded-md">
      {countries.map((country, index) => (
        <Link to={`/country/${country.alpha3Code}`} key={country.numericCode || country.name || index} className="bg-(--elements) cursor-pointer hover:scale-105 transition-transform block">
        <article className="flex flex-col">
          <img src={country.flags?.svg || country.flags?.png || country.flags} alt={`Flag of ${country.name}`} className="object-cover rounded-md" />
          <div className="flex flex-col mt-4 px-4 pb-6">
            <h2 className="text-base text-(--light-text) font-bold mb-2">{country.name}</h2>
            <p className="text-sm">
              <b>Population</b>: {country.population?.toLocaleString('en-US')}
            </p>
            <p className="text-sm">
              <b>Region</b>: {country.region}
            </p>
            <p className="text-sm">
              <b>Capital</b>: {country.capital || "N/A"}
            </p>
          </div>
        </article>
        </Link>
      ))}
    </section>
  );
};

export default ListCountries;
