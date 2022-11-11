import PillButton from "./buttons/PillButton";

const EmptyState = ({ keyword, changeKeyword }) => {
  const suggestions = [
    "Front End",
    "Backend",
    "Full Stack",
    "Design",
    "Marketing",
  ];

  return (
    <div>
      <h2 className="mb-4 font-medium text-gray-700 dark:text-gray-400">
        {`No results for "${keyword}", try:`}
      </h2>
      <ul className="flex flex-wrap justify-center gap-3">
        {suggestions.map((suggestion) => {
          return (
            <li key={suggestion}>
              {" "}
              <PillButton
                text={suggestion}
                changeKeyword={changeKeyword}
                suggestion={suggestion}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EmptyState;
