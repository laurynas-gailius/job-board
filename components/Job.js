import dayjs from "dayjs";

const Job = ({
  company_name,
  title,
  location_name,
  contract_time,
  created,
}) => {



  return (
    <div className="flex py-6 px-6 max-w-xl mx-auto rounded-xl border bg-white border-gray-200 shadow-sm hover:shadow-md dark:shadow-md dark:bg-gray-800  dark:border-gray-700 hover:cursor-pointer transition hover:scale-105 duration-300">
      <div className="w-full">
        <div className="flex">
          <div>
            <h2 className="font-medium text-gray-700 dark:text-gray-400">
              {company_name}
            </h2>
            <h1 className="text-lg font-medium max-w-md text-gray-900 dark:text-white">
              {title}
            </h1>
          </div>
        </div>
        <div className="flex mt-4 justify-between">
          <div className="flex flex-col space-y-1 text-sm text-gray-700 dark:text-gray-400">
            <p>{location_name}</p>
            <p>{contract_time}</p>

          </div>
          <div className="flex items-end">
            <p className="text-sm text-gray-400 dark:text-gray-500">
              {created}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
