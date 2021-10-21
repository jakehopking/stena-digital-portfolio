import Head from "next/head";
import Header from "./Header";

const Layout = ({children, home, sideCol, showGrid}) => {
  return (
    <div className="layout">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="" />
      </Head>
      <div className="main-container">
        <Header />
        <main className={`${showGrid ? "show-grid" : ""}`}>{children}</main>
      </div>
      {sideCol && <aside className="side-container">{sideCol}</aside>}
    </div>
  );
};

export default Layout;
