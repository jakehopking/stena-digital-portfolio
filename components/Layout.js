import Head from "next/head";
import styled from "styled-components";
import Header from "./Header";
import {SIZE, PALLET} from "../theme/theme";
import styles from "./Layout.module.scss";

const LayoutContainer = styled.div`
  display: flex;
  flex-flow: row;
`;

const MainContainer = styled.div`
  display: flex;
  flex-flow: column-reverse;
  width: 100%;
`;

const SideContainer = styled.div`
  display: flex;
  flex: 0 0 350px;
  flex-flow: column;
  background-color: var(--color-panel-bg);
  padding: ${SIZE.spacing._5};
  border-left: 1px solid ${PALLET.grey._00};
  border-top: 1px solid ${PALLET.grey._00};
`;

const Layout = ({children, home, sideCol}) => {
  // debugger;
  return (
    <LayoutContainer>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="" />
      </Head>
      <MainContainer>
        <Header />
        <main>{children}</main>
      </MainContainer>
      {sideCol && <SideContainer>{sideCol}</SideContainer>}
    </LayoutContainer>
  );
};

export default Layout;
