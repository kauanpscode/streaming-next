import styled from 'styled-components';

const Background = '#000';
const MaxWidth = '1200px';

export const HeaderContainer = styled.header`
  background: ${Background};
  border-bottom: 1px solid #fff;
  font-weight: 700;
`;

export const Nav = styled.nav`
  max-width: ${MaxWidth};
  margin: 0 auto;
  padding: 0 24px;
  height: 72px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
`;

export const NavItem = styled.li``;

export const NavLink = styled.span`
  font-size: 0.95rem;
  font-weight: 500;
  color: #e5e5e5;
  text-decoration: none;
  position: relative;
  cursor: pointer;
`;
