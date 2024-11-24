import SideBar from "../../components/SideBar/SideBar";
import { Main, Section } from "./Home.styled";

const Home = () => {
  return (
    <Main className="container">
      {/* Left Side Bar */}
      <SideBar />
      {/* Main Section */}
      <Section>Section</Section>
    </Main>
  );
};

export default Home;
