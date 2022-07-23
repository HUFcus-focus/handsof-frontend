import { Header, Navbar } from "components/common";
import { Container } from "components/common/shared";
import { MainContent } from "components/main";

const Main = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Container>
        <MainContent />
      </Container>
    </>
  );
};

export default Main;
