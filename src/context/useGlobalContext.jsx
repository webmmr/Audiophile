/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const BASE_URL = "http://localhost:3000/data";

function GlobalProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [productsData, setProductsData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(BASE_URL);

        if (!res.ok) throw new Error("Failed to fetch Data");

        const data = await res.json();

        setProductsData(data);

        setError("");
      } catch (err) {
        throw new Error(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoading,
        productsData,
        error,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

function useGlobalContext() {
  const context = useContext(GlobalContext);

  if (context === undefined)
    throw new Error("Context is being used outside it's provider");

  return context;
}

export { useGlobalContext, GlobalProvider };
