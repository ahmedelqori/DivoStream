import { Aside } from "./SideBar.styled";
import {
  Ul,
  Li,
  DashboardIcon,
  EventsIcon,
  LearningIcon,
  ProjectsIcon,
  WorkSpaceIcon,
  Span,
} from "./SideBar.styled";
const SideBar = () => {
  return (
    <Aside>
      <Ul>
        <Li>
          <DashboardIcon />
          <Span>Dashboard</Span>
        </Li>
        <Li>
          <LearningIcon />

          <Span>My Learning</Span>
        </Li>
        <Li>
          <EventsIcon />
          <Span>Events</Span>
        </Li>
        <Li>
          <ProjectsIcon />

          <Span>Projects</Span>
        </Li>
        <Li>
          <WorkSpaceIcon />

          <Span>WorkSpaces</Span>
        </Li>
      </Ul>
    </Aside>
  );
};

export default SideBar;
