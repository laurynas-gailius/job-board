const DropdownMenu = ({ items, changeCountry }) => {
  return (
    <div className=" rounded-lg border border-gray-200 bg-white text-gray-900 shadow-2xl hover:cursor-pointer dark:border-gray-700 dark:bg-gray-800 dark:text-white">
      <ul className="flex flex-col py-2">
        {Object.keys(items).map((key, index) => {
          return (
            <div
              key={index}
              className="py-2 px-5 hover:bg-gray-100 hover:dark:bg-gray-700"
            >
              <li onClick={() => changeCountry(items[key])}>
                {open ? items[key] : null}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default DropdownMenu;
