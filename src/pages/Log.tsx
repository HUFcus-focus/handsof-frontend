import { Header, Navbar } from "components/common";
import { Container } from "components/common/shared";
import { LogContent } from "components/log";

const Log = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Container>
        <LogContent />
      </Container>
    </>
  );
};

export default Log;
