import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  padding: 0 0.5rem;
  grid-template-columns: 1fr 4fr;
  grid-template-areas: "sidebar section";
  @media screen and (max-width: 1366px) {
    width: 100%;
  }
`;

export const Section = styled.section`
  padding: 5px;

  grid-area: section;
  width: 100%;
  height: 100px;
  background-color: blue;
`;
