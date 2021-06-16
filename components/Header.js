import Link from "next/link";
import styled from "styled-components";
import {useRouter} from "next/router";
import {SIZE} from "../theme/theme";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  height: 100px;
  padding: ${SIZE.spacing._4} ${SIZE.spacing._6};
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-nav-bg);
`;

const Logo = styled.img`
  width: 87px;
  height: 32px;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const MenuItem = styled.div`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: ${(props) => (props.active ? "700" : "500")};
  text-align: left;
  border-radius: var(--radius-btn);
  padding: ${SIZE.spacing._1} ${SIZE.spacing._3};
  /* Theme prop example:
  padding: ${({theme}) => theme.size.spacing._2}; */
  background-color: var(--color-${(props) => (props.active ? "btn-nav-bg-active" : "")});
  margin-right: ${SIZE.spacing._5};

  &:hover {
    cursor: pointer;
    background-color: var(--color-btn-nav-bg-active);
    position: relative;
  }
`;

const Header = () => {
  const router = useRouter();
  return (
    <Nav>
      <Logo src="/logo_stena.svg" />
      <MenuWrapper>
        <MenuItem onClick={() => router.push("/")} active={router.pathname === "/"}>
          <a>Portfolio</a>
        </MenuItem>
        <MenuItem
          onClick={() => router.push("/product-teams")}
          active={router.pathname === "/product-teams"}
        >
          <a>Product Teams</a>
        </MenuItem>
        <MenuItem
          onClick={() => router.push("/roadmap")}
          active={router.pathname === "/roadmap"}
        >
          Roadmap
        </MenuItem>
        <MenuItem
          onClick={() => router.push("/digital-culture")}
          active={router.pathname === "/digital-culture"}
        >
          Digital Culture
        </MenuItem>
        <MenuItem
          onClick={() => router.push("trends")}
          active={router.pathname === "/trends"}
        >
          Trends
        </MenuItem>
        <MenuItem
          onClick={() => router.push("/capabilities")}
          active={router.pathname === "/capabilities"}
        >
          Capabilities
        </MenuItem>
      </MenuWrapper>
    </Nav>
  );
};

export default Header;
