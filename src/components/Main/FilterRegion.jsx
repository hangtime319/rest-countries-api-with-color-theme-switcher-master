import React from "react";

const FilterRegion = ({ selectedRegion, setSelectedRegion }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const dropdownRef = React.useRef(null);

  const options = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  React.useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full md:w-1/2 lg:w-62.5" ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between bg-(--elements) text-(--light-text) px-6 py-4 rounded-md shadow-md focus:outline-none cursor-pointer">
        <span>{selectedRegion || "Filter by region"}</span>
        {/* Arrow to open menu */}
        <svg className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-(--elements) text-(--light-text) rounded-md border-none shadow-[0_5px_15px_rgba(150,150,150,0.2)]">
          <ul className="py-2">
            {options.map((option) => (
              <li
                key={option}
                onClick={() => {
                  if (option === "All") {
                    setSelectedRegion("");
                  } else {
                    setSelectedRegion(option);
                  }
                  setIsOpen(false);
                }}
                className="px-6 py-2 cursor-pointer hover:bg-(--light-input) hover:text-(--elements) transition-colors duration-200">
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterRegion;
