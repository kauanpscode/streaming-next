import Link from "next/link";
import {
  HeaderContainer,
  Nav,
  Logo,
  NavList,
  NavItem,
  NavLink
} from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>
          <Link href="/" passHref>
            <NavLink as="span">Pontes</NavLink>
          </Link>
        </Logo>
        <NavList>
          <NavItem>
            <Link href="/" passHref>
              <NavLink>Home</NavLink>
            </Link>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
