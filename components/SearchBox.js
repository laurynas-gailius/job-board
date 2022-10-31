import { XMarkIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from "react";
import PrimaryButton from "./buttons/PrimaryButton"
import DropdownMenu from './DropdownMenu';

const SearchBox = ({ changeKeyword, clearData, country, changeCountry }) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchCountry, setSearchCountry] = useState("United States");
    const [open, setOpen] = useState(false);

    const countries = {
        us: "United States",
        ca: "Canada",
        gb: "United Kingdom",
        de: "Germany",
        at: "Austria",
        fr: "France",
        nl: "Netherlands",
        it: "Italy",
        sg: "Singapore"
    }

    function getObjKey(obj, value) {
        return Object.keys(obj).find(key => obj[key] === value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        changeKeyword(searchTerm);
        clearData([]);
        changeCountry(getObjKey(countries, searchCountry));
    }

    const handleClear = () => {
        setSearchTerm("")
    };

    // close dropdown
    useEffect(() => {
        setOpen(false);
    }, [searchCountry]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full relative text-gray-900 dark:text-white sm:hidden">
                <button onClick={() => setOpen(!open)} className="flex mb-3 items-center p-4 text-sm font-medium text-cente bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-700 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-60 dark:border-gray-700 transition shadow-sm" type="button">{searchCountry}</button>
                <svg className="absolute w-4 h-4 right-4 bottom-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <div className='absolute top-16 w-full z-30'>
                    {open && <DropdownMenu items={countries} changeCountry={country => setSearchCountry(country)} />}
                </div>
            </div>
            <div className="flex">
                <button onClick={() => setOpen(!open)} className="hidden flex-shrink-0 z-10 sm:inline-flex items-center pr-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-50 border-t border-l border-b border-gray-200 rounded-l-xl hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-700 transition shadow-sm" type="button">{searchCountry} <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                <div className='hidden sm:block absolute top-24 z-30'>
                    {open && <DropdownMenu items={countries} changeCountry={country => setSearchCountry(country)} />}
                </div>
                <div className="relative w-full">
                    <input required type="text" className="block p-4 w-full z-20 text-sm text-gray-900 dark:text-white rounded-xl sm:rounded-r-xl sm:rounded-l-none border bg-white border-gray-200 shadow-sm dark:shadow-md dark:bg-gray-800 dark:border-gray-700" placeholder="Search for a job title..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <div className="absolute right-24 bottom-4">
                        {searchTerm && <XMarkIcon onClick={handleClear} className="h-5 w-5 text-gray-900 dark:text-white hover:text-gray-900/70 dark:hover:text-white/70 hover:cursor-pointer" />}
                    </div>
                    <div className="text-white absolute right-2.5 bottom-2.5">
                        <PrimaryButton text={"Search"} />
                    </div>
                </div>
            </div>

        </form >
    )
}

export default SearchBox