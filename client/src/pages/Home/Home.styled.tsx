import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  padding: 0 0.5rem;
  grid-template-columns: 1fr 4fr;
  grid-template-areas: "sidebar section";
  gap: 1rem;
  @media screen and (max-width: 1366px) {
    width: 100%;
  }
  @media screen and (max-width: 864px) {
    grid-template-columns: 1fr;
    grid-template-areas: "section";
  }
`;

export const Section = styled.section`
  padding: 10px;
  grid-area: section;
  width: 100%;
  height: 10000px;
  background-color: blue;
  
`;
