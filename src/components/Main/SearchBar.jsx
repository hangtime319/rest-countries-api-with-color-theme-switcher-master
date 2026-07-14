import InputSearch from "./InputSearch";
import FilterRegion from "./FilterRegion";

const SearchBar = ({ searchTerm, setSearchTerm, selectedRegion, setSelectedRegion }) => {
  return (
    <article className="flex flex-col md:flex-row lg:justify-between items-start md:items-center gap-6 md:gap-4 lg:gap-10 px-4 md:px-12 py-4 mt-8 w-full">
      <InputSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FilterRegion selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion} />
    </article>
  );
};

export default SearchBar;
