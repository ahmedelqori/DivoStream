import {
  Nav,
  Ul,
  Li,
  LeftSide,
  SearchIcon,
  Notification,
  ProfilePic,
  LoginSignUp,
  LinkReact,
  Menu,
} from "./NavBar.styled";

const NavBar = () => {
  return (
    <Nav className="container">
      <Ul>
        <img src="./src/assets/logo.png" width={50} alt="Logo" />
        <Li>
          <LinkReact to={"/home"}>My Home</LinkReact>
        </Li>
        <Li>
          <LinkReact to={"/catalog"}>Catalog</LinkReact>
        </Li>
        <Li>
          <LinkReact to={"resources"}>Resources</LinkReact>
        </Li>
        <Li>
          <LinkReact to={"community"}>Community</LinkReact>
        </Li>
        <Li>
          <LinkReact to={"pricing"}>Pricing</LinkReact>
        </Li>
      </Ul>
      <LeftSide>
        <SearchIcon />
        <Notification />
        <ProfilePic src="src/assets/ael-qori.jpeg" alt="profile picture" />
        <LoginSignUp>Login</LoginSignUp>
        <LoginSignUp>SignUp</LoginSignUp>
        <Menu />
      </LeftSide>
    </Nav>
  );
};

export default NavBar;
