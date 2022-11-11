const PillButton = ({ text, changeKeyword, suggestion }) => {
  const handleSubmit = (e) => {
    changeKeyword(suggestion);
  };

  return (
    <button
      onClick={handleSubmit}
      className="flexright-2.5 bottom-2.5 rounded-full border-2 border-primary py-1 px-3 text-sm font-medium text-primary shadow-md shadow-primary/20 transition hover:border-primary/60 active:bg-primary/20 dark:text-primary"
    >
      {text}
    </button>
  );
};

export default PillButton;
