const PrimaryButton = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className="bg-primary text-white dark:text-[#013E29] font-medium rounded-full shadow-lg shadow-primary/20 py-2 px-4 hover:bg-primary/80 transition transform hover:-translate-y-1 active:bg-primary">{text}</button>
    )
}

export default PrimaryButton