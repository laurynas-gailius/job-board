const DropdownMenu = ({ items, changeCountry }) => {

    return (
        <div className=" text-gray-900 dark:text-white rounded-lg border bg-white border-gray-200 shadow-2xl dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer">
            <ul className="flex flex-col py-2">
                {Object.keys(items).map((key, index) => {
                    return (
                        <div key={index} className="py-2 px-5 hover:bg-gray-100 hover:dark:bg-gray-700">
                            <li onClick={() => changeCountry(items[key])}>
                                {open && items[key]}
                            </li>
                        </div>
                    );
                })}
            </ul >
        </div >
    )
}

export default DropdownMenu