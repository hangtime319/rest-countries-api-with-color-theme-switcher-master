import { useParams, Link } from "react-router-dom";
import ReturnButton from "../Main/ReturnButton";

const DetailsCountry = ({ countries }) => {
  const { id } = useParams();

  const country = countries.find(c => c.alpha3Code === id);

  if (!country) return <p className="mt-8 px-12 text-base">Country not found!</p>;

  const getBorderName = (borderCode) => {
    const borderCountry = countries.find(c => c.alpha3Code === borderCode);
    return borderCountry ? borderCountry.name : borderCode;
  }

  return (
    <>
    <ReturnButton />
    
    <section className="mt-8 md:px-12 py-4 px-8">
      <article className="flex flex-col lg:flex-row lg:items-center gap-24">
        <img className="object-cover w-full lg:w-1/2" src={country.flags?.svg || country.flags?.png} alt={`Flag of ${country.name}`} />
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold">{country.name}</h2>
          <div className="flex flex-col lg:flex-row items-start md:justify-between mb-10 gap-10 lg:gap-24">
            <ul className="flex flex-col gap-2">
              <li>
                <p className="text-base">
                  <b>Native Name: </b> {country.nativeName}
                </p>
              </li>
              <li>
                <p className="text-base">
                  <b>Population: </b>
                  {country.population?.toLocaleString("en-US")}
                </p>
              </li>
              <li>
                <p className="text-base">
                  <b>Region: </b>
                  {country.region}
                </p>
              </li>
              <li>
                <p className="text-base">
                  <b>Sub Region: </b>
                  {country.subregion}
                </p>
              </li>
              <li>
                <p className="text-base">
                  <b>Capital: </b>
                  {country.capital || "N/A"}
                </p>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li>
                <p className="text-base">
                  <b>Top Level Domain: </b>
                  {country.topLevelDomain?.join(", ")}
                </p>
              </li>
              <li>
                <p className="text-base">
                  <b>Currencies: </b>
                  {country.currencies ? country.currencies.map((currency) => currency.name).join(", ") : "N/A"}
                </p>
              </li>
              <li>
                <p className="text-base">
                  <b>Languages: </b>
                  {country.languages ? country.languages.map((language) => language.name).join(", ") : "N/A"}
                </p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-start gap-3 mt-4 lg:mt-0 w-full">
            <p className="text-base font-bold whitespace-nowrap pt-1">Border Countries:</p>
            <div className="flex flex-wrap items-center gap-2 flex-1">
              {country.borders && country.borders.length > 0 ? (
                country.borders.map((border) => (
                  <Link to={`/country/${border}`} key={border} className="px-6 py-1 rounded-sm bg-(--elements) shadow-sm border border-(--light-bg) min-w-16 text-center cursor-pointer hover:scale-105 transition-all inline-block">
                    {getBorderName(border)}
                  </Link>
                ))
              ) : (
                <span className="mt-1 text-base">No border countries</span>
              )}
            </div>
          </div>
        </div>
      </article>
    </section>
    </>
  );
};

export default DetailsCountry;
