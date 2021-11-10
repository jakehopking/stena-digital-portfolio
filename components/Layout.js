import Head from "next/head";
import Header from "./Header";

const Layout = ({ children, sideCol, showGrid }) => {
	return (
		<div className="layout">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="" />
			</Head>
			<div className="main-container">
				<main id="__main" className={`${showGrid ? "show-grid" : ""}`}>
					<div>
						<a style={{ color: "white" }} href="/api/auth/login">
							Login
						</a>
					</div>
					{children}
				</main>
				<Header />
			</div>
			{sideCol && <aside className="side-container">{sideCol}</aside>}
		</div>
	);
};

export default Layout;
