const PrimaryButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-full bg-primary py-2 px-4 text-sm font-medium text-white shadow-md shadow-primary/20 transition hover:bg-primary/80 active:bg-primary dark:text-[#013E29]"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
