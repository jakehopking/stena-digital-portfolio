import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0";
import Header from "./Header";

const Layout = ({ children, sideCol, showGrid }) => {
	const { user, isLoading } = useUser();

	return (
		<div className="layout">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="" />
			</Head>
			<div className="main-container">
				<main id="__main" className={`${showGrid ? "show-grid" : ""}`}>
					<div>
						{!isLoading && !user && (
							<a style={{ color: "white" }} href="/api/auth/login">
								Login
							</a>
						)}
						{user && (
							<a style={{ color: "white" }} href="/api/auth/logout">
								Logout
							</a>
						)}
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
