import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMenu = styled.ul`
  padding: 0;
  display: flex;
  gap: 2.125rem;
`;
const StyledList = styled.li`
  list-style: none;
  color: var(--light);
`;

const linkStyle = {
  textDecoration: "none",
  color: "#f1f1f1",
  textTransform: "uppercase",
  fontWeight: "700",
};

const categories = [
  {
    id: 1,
    name: "headphones",
  },
  {
    id: 2,
    name: "speakers",
  },
  {
    id: 3,
    name: "earphones",
  },
];

function Menu() {
  return (
    <StyledMenu>
      <StyledList>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
      </StyledList>
      {categories.map((category) => (
        <StyledList key={category.id}>
          <Link style={linkStyle} to={`/category/${category.name}`}>
            {category.name}
          </Link>
        </StyledList>
      ))}
    </StyledMenu>
  );
}

export default Menu;
