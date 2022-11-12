import dayjs from "dayjs";

const Job = (props) => {
  const timeAgo = () => {
    const now = dayjs();
    const difference = now.diff(props.created, "day");

    if (difference === 0) {
      return "Today";
    } else if (difference === 1) {
      return `${difference} day ago`;
    } else {
      return `${difference} days ago`;
    }
  };

  return (
    <li className="z-10 mx-auto flex w-full max-w-xl rounded-xl border border-gray-200 bg-white py-6 px-6 decoration-0 shadow-sm transition duration-300 hover:cursor-pointer dark:border-neutral3 dark:bg-neutral2 dark:shadow-md dark:hover:border-neutral4 sm:hover:scale-105 sm:hover:shadow-md">
      <div className="w-full">
        <a href={props.redirect_url} target="_blank">
          <div className="flex">
            <div>
              <h2 className="font-medium text-gray-700 dark:text-gray-400">
                {props.company.display_name}
              </h2>
              <h1 className="max-w-md text-lg font-medium text-gray-900 dark:text-white">
                {props.title}
              </h1>
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <div className="flex flex-col space-y-1 text-sm text-gray-700 dark:text-gray-400">
              <p>{props.location.display_name}</p>
            </div>
            <div className="flex items-end">
              <p className="text-sm text-gray-400 dark:text-gray-500">
                {timeAgo()}
              </p>
            </div>
          </div>
        </a>
      </div>
    </li>
  );
};

export default Job;
