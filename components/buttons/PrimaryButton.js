const PrimaryButton = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className="text-white w-full text-sm bg-primary dark:text-[#013E29] font-medium rounded-full shadow-md shadow-primary/20 py-2 px-4 hover:bg-primary/80 transition active:bg-primary">
            {text}
        </button>
    )
}

export default PrimaryButton