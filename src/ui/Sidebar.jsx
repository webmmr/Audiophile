import styled from "styled-components";
import UniqueCats from "./UniqueCats";
import { useLoaderData } from "react-router-dom";

const StyledSidebar = styled.section`
  width: 100%;
  background-color: var(--light);
`;

const StyledCats = styled.section`
  display: flex;

  @media screen and (max-width: 767px) {
    padding: 150px 0 100px;
  }

  @media screen and (max-width: 575px) {
    flex-direction: column;
    padding: 0 0 60px;
  }
`;

function Sidebar() {
  const productData = useLoaderData();

  return (
    <StyledSidebar>
      <StyledCats>
        <UniqueCats productData={productData} />
      </StyledCats>
    </StyledSidebar>
  );
}

export default Sidebar;
