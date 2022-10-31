import PillButton from "./buttons/PillButton"

const EmptyState = ({ keyword, changeKeyword }) => {

    const suggestions = ["Front End", "Backend", "Full Stack", "Design", "Marketing"];

    return (
        <div>
            <h2 className="font-medium mb-4 text-gray-700 dark:text-gray-400">
                {`No results for "${keyword}", try:`}
            </h2>
            <ul className="flex flex-wrap gap-3 justify-center">
                {suggestions.map((suggestion) => {
                    return (
                        <li key={suggestion}> <PillButton text={suggestion} changeKeyword={changeKeyword} suggestion={suggestion} /></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default EmptyState


