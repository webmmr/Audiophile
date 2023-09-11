import styled from "styled-components";

const StyledLoader = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--brand);
  inset: 0px;
  backdrop-filter: blur(4px);
`;

function Loader() {
  return (
    <StyledLoader>
      <div className="loader"></div>
    </StyledLoader>
  );
}

export default Loader;
