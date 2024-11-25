import styled from "styled-components";
import { CiGrid41 } from "react-icons/ci";
import { CiMemoPad } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";
import { CiLaptop } from "react-icons/ci";

export const Aside = styled.aside`
  padding: 5px;
  grid-area: sidebar;
  width: 100%;
  @media screen and (max-width: 864px) {
    display: none;
  } 
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  font-weight: 400;
  transition: 0.2s ease;
  cursor: pointer;
  position: relative;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    font-weight: 500;
    background-color: #ffffff39;
  }
  &:hover::before {
    content: "";
    height: 100%;
    width: 6px;
    background-color: black;
    position: absolute;
    top: 0px;
    left: 0px;
  }
`;

export const Span = styled.span`
  @media screen and (max-width: 864px) {
    display: none;
  }
`;

export const DashboardIcon = styled(CiGrid41)`
  font-size: 1.6rem;
`;
export const LearningIcon = styled(CiMemoPad)`
  font-size: 1.6rem;
`;
export const EventsIcon = styled(CiCalendar)`
  font-size: 1.6rem;
`;
export const ProjectsIcon = styled(CiFolderOn)`
  font-size: 1.6rem;
`;
export const WorkSpaceIcon = styled(CiLaptop)`
  font-size: 1.6rem;
`;
