import { useContext } from "react";
import AppContext from "../AppContext";

const PillButton = ({ text, changeKeyword, suggestion }) => {
  const searchTermContext = useContext(AppContext);

  const handleSubmit = (e) => {
    changeKeyword(suggestion);
    searchTermContext.setSearchTerm(suggestion);
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
