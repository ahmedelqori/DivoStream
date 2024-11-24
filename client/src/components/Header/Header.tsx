import NotificationBar from "../NotificationBar/NotificationBar";
import NavBar from "../NavBar/NavBar";
import styled from "styled-components";

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
`

const Header = () => {
  return (
    <header>
      <NotificationBar />
      <NavBar />
      <Line/>
    </header>
  );
};

export default Header;
