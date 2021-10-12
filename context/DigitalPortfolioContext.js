import {createContext, useState} from "react";
import {getDatabase} from "../lib/notion";
export const databaseId = process.env.NOTION_DB_PORTFOLIO_TRACKER;

const DigitalPortfolioContext = createContext();

const DigitalPortfolioProvider = ({children}) => {
  const [digitalPortfolio, setDigitalPortfolio] = useState([]);

  const refreshDigitalPortfolio = async () => {
    try {
      const res = await getDatabase(databaseId);
      // const latest = await res.json();
      setDigitalPortfolio(res);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <DigitalPortfolioContext.Provider
      value={{
        digitalPortfolio,
        refreshDigitalPortfolio,
      }}
    >
      {children}
    </DigitalPortfolioContext.Provider>
  );
};

export {DigitalPortfolioProvider, DigitalPortfolioContext};
