import dayjs from "dayjs";

const Job = ({
  company_name,
  title,
  location_name,
  contract_time,
  created,
}) => {
  const date1 = dayjs(created);
  const date2 = dayjs(new Date());

  return (
    <div className="flex py-6 px-6 rounded-xl border bg-white border-gray-200 shadow-sm dark:shadow-md dark:bg-gray-800 dark:border-gray-700 hover:dark:bg-gray-900 hover:bg-slate-50 hover:cursor-pointer transition">
      <div className="w-full">
        <div className="flex">
          <div>
            <h2 className="font-medium text-gray-700 dark:text-gray-400">
              {company_name}
            </h2>
            <h1 className="text-lg font-medium text-gray-900 dark:text-white">
              {title}
            </h1>
          </div>
        </div>
        <div className="flex mt-4 justify-between">
          <div className="flex flex-col space-y-1 text-sm text-gray-700 dark:text-gray-400">
            <p>{contract_time}</p>
            {/* <span className="h-1 w-1 bg-gray-700 dark:bg-gray-400 rounded-full"></span> */}
            <p>{location_name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-700 dark:text-gray-400">
              {date2.diff(date1, "month")} day(s) ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
