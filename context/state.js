import {createContext, useContext} from "react";
import {getDatabase} from "../lib/notion";
export const databaseId = process.env.NOTION_DB_PORTFOLIO_TRACKER;

const AppContext = createContext();

export async function AppWrapper({children}) {
  let sharedState = await getDatabase(databaseId);

  return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
