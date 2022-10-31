
const PillButton = ({ text, changeKeyword, suggestion }) => {

    const handleSubmit = (e) => {
        changeKeyword(suggestion);
    }

    return (
        <button onClick={handleSubmit} className="flexright-2.5 bottom-2.5 text-sm border-primary border-2 text-primary dark:text-primary font-medium rounded-full shadow-md shadow-primary/20 py-1 px-3 hover:border-primary/60 transition active:bg-primary/20">
            {text}
        </button>
    )
}

export default PillButton

