import { useState } from "react";
import AppContext from "../components/AppContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <AppContext.Provider value={{ searchTerm, setSearchTerm }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
