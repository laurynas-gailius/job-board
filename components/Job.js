import dayjs from "dayjs";

const Job = (props) => {

  const timeAgo = () => {
    const now = dayjs();
    const difference = now.diff(props.created, 'day');

    if (difference === 0) {
      return "Today"
    } else if (difference === 1) {
      return `${difference} day ago`
    } else {
      return `${difference} days ago`
    }
  }

  return (
    <li className="flex py-6 px-6 max-w-xl w-full mx-auto rounded-xl decoration-0 border bg-white border-gray-200 shadow-sm sm:hover:shadow-md dark:shadow-md dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer transition sm:hover:scale-105 duration-300">
      <div className="w-full">
        <a href={props.redirect_url} target="_blank">
          <div className="flex">
            <div>
              <h2 className="font-medium text-gray-700 dark:text-gray-400">
                {props.company.display_name}
              </h2>
              <h1 className="text-lg font-medium max-w-md text-gray-900 dark:text-white">
                {props.title}
              </h1>
            </div>
          </div>
          <div className="flex mt-4 justify-between">
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
