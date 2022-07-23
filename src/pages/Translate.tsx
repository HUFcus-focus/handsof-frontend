import { Header, Navbar } from "components/common";
import { Container } from "components/common/shared";
import { TranslateContent } from "components/translate";

const Translate = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Container>
        <TranslateContent />
      </Container>
    </>
  );
};

export default Translate;
