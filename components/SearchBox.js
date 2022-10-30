import { useState } from "react";
import PrimaryButton from "./PrimaryButton"

const SearchBox = (props) => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.changeKeyword(searchTerm);
        props.clearData([]);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex">
                <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center pr-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border-t border-l border-b border-gray-200 rounded-l-xl hover:bg-gray-50 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600 transition shadow-sm" type="button">Worldwide <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                <div className="relative w-full">
                    <input type="search" className="block p-4 w-full z-20 text-sm text-gray-900 dark:text-white rounded-r-xl border bg-white border-gray-200 shadow-sm dark:shadow-md dark:bg-gray-800 dark:border-gray-700" placeholder="Search for a job title..." required="" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <div className="text-white absolute right-2.5 bottom-2.5">
                        <PrimaryButton text={"Search"} />
                    </div>
                </div>
            </div>
        </form >
    )
}

export default SearchBox