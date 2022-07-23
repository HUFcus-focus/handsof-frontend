import { Header, Navbar } from "components/common";
import { Container } from "components/common/shared";
import { LogContent, LogBar } from "components/log";

const Log = () => {
  return (
    <>
      <Header />
      <Navbar />
      <LogBar />
      <Container>
        <LogContent />
      </Container>
    </>
  );
};

export default Log;
