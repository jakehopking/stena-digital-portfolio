import "../styles/main.scss";
import { useState, Fragment, useReducer } from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { UserProvider } from "@auth0/nextjs-auth0";
import { NetlifyCMSContext } from "../context/netlifyCmsContext";
import { AppContext } from "../context/appContext";
import { COLOUR, SIZE, PALLET } from "../theme/theme";
import { GlobalStyles } from "../styles/global";
import { cmsData } from "../data/data";

const initialAppState = {
	isPlaying: false,
	currentRoute: 0,
};

const appStateReducer = (state, action) => {
	// debugger;
	switch (action.type) {
		case "APP_CAROUSEL_START":
			return {
				...state,
				isPlaying: true,
			};
		case "APP_CAROUSEL_STOP":
			return {
				...state,
				isPlaying: false,
			};
		case "APP_CAROUSEL_SET_ROUTE":
			return {
				...state,
				currentRoute: action.payload,
			};
		default:
			return state;
	}
};

function Application({ Component, pageProps }) {
	const [theme, setTheme] = useState("dark");
	const [state, dispatch] = useReducer(appStateReducer, initialAppState);

	const toggleTheme = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};
	// console.log(COLOUR.theme[theme]);
	// debugger;
	return (
		<Fragment>
			<Head>
				<title>Digital Portfolio</title>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width"
				/>
			</Head>
			<NetlifyCMSContext.Provider value={cmsData}>
				<AppContext.Provider
					value={{
						state,
						dispatch,
					}}
				>
					<ThemeProvider
						theme={{
							color: COLOUR.theme[theme],
							size: SIZE,
							pallet: PALLET,
						}}
					>
						{/* <button onClick={toggleTheme}>Switch Theme</button> */}
						<GlobalStyles />
						<UserProvider>
							<Component {...pageProps} />
						</UserProvider>
					</ThemeProvider>
				</AppContext.Provider>
			</NetlifyCMSContext.Provider>
		</Fragment>
	);
}

export default Application;
