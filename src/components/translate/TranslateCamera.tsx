import { CameraOffSVG, CameraOnSVG, UserOffSVG } from "assets/svg";
import * as S from "components/translate/TranslateCamera.styled";
import { useState } from "react";
import Webcam from "react-webcam";

// https://www.npmjs.com/package/react-webcam

const TranslateCamera = () => {
  const [camera, setCamera] = useState(false);

  const videoConstraints = {
    width: 274,
    height: 434,
    facingMode: "user",
  };

  return (
    <S.CameraContainer>
      {camera && (
        <Webcam
          audio={false}
          mirrored={true}
          width={274}
          height={434}
          videoConstraints={videoConstraints}
          style={{ borderRadius: "10px" }}
        />
      )}
      <S.CameraBtn onClick={() => setCamera(!camera)}>
        {!camera && (
          <S.UserOff>
            <UserOffSVG />
          </S.UserOff>
        )}
        {camera ? <CameraOffSVG /> : <CameraOnSVG />}
      </S.CameraBtn>
    </S.CameraContainer>
  );
};

export default TranslateCamera;
