import { CheckIcon } from "@heroicons/react/24/solid";

const DropdownMenu = ({ items, changeCountry, country }) => {
  return (
    <div className=" rounded-lg border border-gray-200 bg-white text-gray-900 shadow-2xl dark:border-neutral3 dark:bg-neutral2 dark:text-white">
      <ul className="flex flex-col py-2">
        {Object.keys(items).map((key, index) => {
          return (
            <>
              {key === country ? (
                <div
                  key={index}
                  className="flex space-x-2 py-2 px-5"
                  onClick={() => changeCountry(items[key])}
                >
                  <li>{items[key]}</li>
                  <CheckIcon className="h-5 w-5 text-primary" />
                </div>
              ) : (
                <div
                  key={index}
                  className="py-2 px-5 hover:cursor-pointer hover:bg-gray-100 hover:dark:bg-neutral3"
                  onClick={() => changeCountry(items[key])}
                >
                  <li>{items[key]}</li>
                </div>
              )}
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default DropdownMenu;
