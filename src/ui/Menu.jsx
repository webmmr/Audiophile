import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledMenu = styled.ul`
  padding: 0;
  display: flex;
  gap: 2.125rem;

  @media screen and (max-width: 767px) {
    display: block;
  }
`;
const StyledList = styled.li`
  list-style: none;
  color: var(--light);
`;

function Menu() {
  return (
    <StyledMenu>
      <StyledList>
        <NavLink to="/" className="linkStyle">
          Home
        </NavLink>
        <NavLink to="/shop" className="linkStyle">
          Shop All
        </NavLink>
        <NavLink to="/category/headphones" className="linkStyle">
          Headphones
        </NavLink>
        <NavLink to="/category/earphones" className="linkStyle">
          Earphones
        </NavLink>
        <NavLink to="/category/speakers" className="linkStyle">
          Speakers
        </NavLink>
      </StyledList>
    </StyledMenu>
  );
}

export default Menu;
