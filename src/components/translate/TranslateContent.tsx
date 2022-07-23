import * as S from "components/translate/TranslateContent.styled";
import { Title, TitleLine } from "components/common/shared";
import { ArrowRightSVG, RefreshSVG, CopySVG } from "assets/svg";
import { TranslateCamera } from "components/translate";

const TranslateContent = () => (
  <>
    <Title>
      번역하기<span style={{ color: "#4285F4" }}>.</span>
      <TitleLine />
    </Title>
    <S.TranslateContentContainer>
      <TranslateCamera />
      <ArrowRightSVG />
      <S.TranslationContainer>
        <S.ResultBox>
          <S.ResultText>
            번역을 시작하기 전에 간단하게 안내해드릴게요.
            <br /> 수어가 잘 인식되도록 정면을 바라봐주세요. 동시에 화면을
            보면서 제대로 번역되고 있는지 확인해주세요.
          </S.ResultText>
        </S.ResultBox>
        <S.SubBoxContainer>
          <S.SubBox>
            <CopySVG style={{ cursor: "pointer" }} />
          </S.SubBox>
          <S.RefreshBtn>
            <RefreshSVG />
          </S.RefreshBtn>
        </S.SubBoxContainer>
      </S.TranslationContainer>
    </S.TranslateContentContainer>
  </>
);

export default TranslateContent;
