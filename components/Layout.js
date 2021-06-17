import Head from "next/head";
import Header from "./Header";

const Layout = ({children, home, sideCol}) => {
  return (
    <div className="layout">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="" />
      </Head>
      <div className="main-container">
        <Header />
        <main>{children}</main>
      </div>
      {sideCol && <aside className="side-container">{sideCol}</aside>}
    </div>
  );
};

export default Layout;
