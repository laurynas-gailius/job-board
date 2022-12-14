import { useContext } from "react";
import AppContext from "../components/AppContext";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useEffect, useState, useRef } from "react";
import PrimaryButton from "./buttons/PrimaryButton";
import DropdownMenu from "./DropdownMenu";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const countries = {
  us: "United States",
  ca: "Canada",
  gb: "United Kingdom",
  de: "Germany",
  at: "Austria",
  fr: "France",
  nl: "Netherlands",
  it: "Italy",
  sg: "Singapore",
};

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return domNode;
};

const SearchBox = ({
  changeKeyword,
  clearData,
  changeCountry,
  changeLoading,
  keyword,
  country,
}) => {
  const [searchCountry, setSearchCountry] = useState("United States");
  const [open, setOpen] = useState(false);

  const searchTermContext = useContext(AppContext);

  let domNode = useClickOutside(() => {
    setOpen(false);
  });

  function getObjKey(obj, value) {
    return Object.keys(obj).find((key) => obj[key] === value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    changeKeyword(searchTermContext.searchTerm);
    if (keyword !== searchTermContext.searchTerm) {
      clearData([]);
      changeLoading(true);
    }
  };

  const handleClear = () => {
    searchTermContext.setSearchTerm("");
  };

  // close dropdown & rerun search
  useEffect(() => {
    setOpen(false);
    clearData([]);
    changeLoading(true);
    changeCountry(getObjKey(countries, searchCountry));
  }, [searchCountry]);

  return (
    <form onSubmit={handleSubmit}>
      <div ref={domNode}>
        {/* mobile: location dropdown */}
        <div className="relative z-20 flex w-full flex-col text-gray-900 dark:text-white sm:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="mb-3 flex items-center rounded-xl border border-gray-200 bg-white p-4 text-center text-sm font-medium shadow-sm transition hover:bg-gray-100 focus:border-primary focus:bg-white focus:outline-none dark:border-neutral3 dark:bg-neutral2 dark:hover:bg-neutral dark:focus:bg-neutral"
            type="button"
          >
            <span className="font-normal text-gray-400">Where:&nbsp;</span>
            {searchCountry}
          </button>
          <svg
            className="absolute right-4 bottom-7 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <div className="absolute top-16 z-30 w-full">
            {open ? (
              <DropdownMenu
                items={countries}
                changeCountry={setSearchCountry}
                country={country}
              />
            ) : null}
          </div>
        </div>
        {/* desktop: location dropdown */}
        <div className="flex">
          <button
            onClick={() => setOpen(!open)}
            className="z-10 hidden flex-shrink-0 items-center rounded-l-xl border-t border-l border-b border-gray-200 bg-gray-50 px-4 pr-2.5 text-center text-sm font-medium text-gray-900 shadow-sm transition hover:bg-gray-100 focus:outline-none dark:border-neutral3 dark:bg-neutral2 dark:text-white dark:hover:bg-neutral sm:inline-flex"
            type="button"
          >
            <span className="font-normal text-gray-400">Where:&nbsp;</span>
            {searchCountry}{" "}
            <svg
              className="ml-1 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="absolute top-60 z-30 hidden sm:block">
            {open ? (
              <DropdownMenu
                items={countries}
                changeCountry={setSearchCountry}
                country={country}
              />
            ) : null}
          </div>
          {/* job search input */}
          <div className="relative w-full">
            <input
              required
              type="text"
              className="z-20 block w-full cursor-pointer rounded-xl border border-gray-200 bg-white p-4 pl-9 text-sm text-gray-900 shadow-sm transition focus:border-primary dark:border-neutral3 dark:bg-neutral2 dark:text-white dark:shadow-md dark:hover:bg-neutral dark:focus:bg-neutral sm:rounded-r-xl sm:rounded-l-none"
              placeholder="Search for a job title..."
              value={searchTermContext.searchTerm}
              onChange={(e) => searchTermContext.setSearchTerm(e.target.value)}
            />
            <div className="absolute left-4 bottom-5">
              <MagnifyingGlassIcon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            </div>

            <div className="absolute right-24 bottom-4">
              {searchTermContext.searchTerm ? (
                <XMarkIcon
                  onClick={handleClear}
                  className="h-5 w-5 text-gray-900 hover:cursor-pointer hover:text-gray-900/70 dark:text-white dark:hover:text-white/70"
                />
              ) : null}
            </div>
            <div className="absolute right-2.5 bottom-2.5 text-white">
              <PrimaryButton text={"Search"} />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBox;
