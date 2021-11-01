import "../styles/main.scss";
import {useState, Fragment} from "react";
import Head from "next/head";
import {ThemeProvider} from "styled-components";
import {NetlifyCMSContext} from "../context/netlifyCmsContext";
import {COLOUR, SIZE, PALLET} from "../theme/theme";
import {GlobalStyles} from "../styles/global";
import netlifyCMSData from "../content/digital_bets.json";
import {cmsData} from "../data/data";

function Application({Component, pageProps}) {
  const [theme, setTheme] = useState("dark");

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
        <ThemeProvider
          theme={{
            color: COLOUR.theme[theme],
            size: SIZE,
            pallet: PALLET,
          }}
        >
          {/* <button onClick={toggleTheme}>Switch Theme</button> */}
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </NetlifyCMSContext.Provider>
    </Fragment>
  );
}

export default Application;
