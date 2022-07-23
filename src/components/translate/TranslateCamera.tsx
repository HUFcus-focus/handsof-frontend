import { CameraOffSVG } from "assets/svg";
import * as S from "components/translate/TranslateCamera.styled";

const TranslateCamera = () => {
  return (
    <S.CameraContainer>
      <S.CameraBtn>
        <CameraOffSVG />
      </S.CameraBtn>
    </S.CameraContainer>
  );
};

export default TranslateCamera;
