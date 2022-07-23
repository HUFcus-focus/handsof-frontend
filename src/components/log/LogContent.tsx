import * as S from "components/log/LogContent.styled";
import { Title, TitleLine } from "components/common/shared";

const LogContent = () => (
  <>
    <Title>
      채팅 목록<span style={{ color: "#F4BF4F" }}>.</span>
      <TitleLine />
    </Title>
    <S.LogContentContainer></S.LogContentContainer>
  </>
);

export default LogContent;
