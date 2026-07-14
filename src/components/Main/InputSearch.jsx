const InputSearch = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex items-center gap-4 bg-(--elements) text-(--light-text) px-6 py-4 rounded-md shadow-md w-full md:w-1/2 lg:w-120">
      <label htmlFor="search" className="sr-only">
        Search for a country
      </label>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-5 h-5 fill-current opacity-50 transition-opacity duration-300" aria-hidden="true">
        <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
      </svg>
      <input type="search" id="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full flex-1 focus:outline-none text-sm md:text-base bg-(--elements) placeholder:text-(--light-text)" placeholder="Search for a country..." aria-label="Search for a country" />
    </div>
  );
};

export default InputSearch;
