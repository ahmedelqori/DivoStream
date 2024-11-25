import NotificationBar from "../NotificationBar/NotificationBar";
import NavBar from "../NavBar/NavBar";
import styled from "styled-components";

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
`;
const HeaderTag = styled.header`
  display: flex;
  flex-direction: column;
`;
const Header = () => {
  return (
    <HeaderTag>
      {/* <NotificationBar /> */}
      <NavBar />
      <Line />
    </HeaderTag>
  );
};

export default Header;
