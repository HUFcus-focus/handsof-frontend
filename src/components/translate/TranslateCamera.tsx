import { CameraOffSVG, CameraOnSVG, UserOffSVG } from "assets/svg";
import * as S from "components/translate/TranslateCamera.styled";
import { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";

// https://www.npmjs.com/package/react-webcam

const TranslateCamera = () => {
  const [camera, setCamera] = useState(false);
  const [text, setText] = useState("");

  const videoConstraints = {
    width: 274,
    height: 434,
    facingMode: "user",
  };

  const webcamElementRef = useRef(null);

  const runCoco = async () => {
    const net = await tf.loadGraphModel(
      "https://handsof-model.s3.ap-northeast-2.amazonaws.com/model.json"
    );
    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net) => {
    if (
      typeof webcamElementRef.current !== "undefined" &&
      webcamElementRef.current !== null &&
      webcamElementRef.current.video.readyState === 4
    ) {
      const video = webcamElementRef.current.video;

      const img = tf.browser.fromPixels(video);
      const resized = tf.image.resizeBilinear(img, [274, 434]);
      const casted = resized.cast("int32");
      const expanded = casted.expandDims(0);
      const obj = await net.executeAsync(expanded);

      const boxes = await obj[1].array();
      const classes = await obj[2].array();
      const scores = await obj[4].array();

      const labelMap = {
        1: "안녕하세요!",
        2: "감사해요 :)",
        3: "사랑해요 :>",
        4: "좋아요!!",
        5: "힘들 것 같아요 :(",
      };

      for (let i = 0; i <= boxes[0].length; i++) {
        console.log(scores[0][i]);
        if (boxes[0][i] && classes[0][i] && scores[0][i] > 0.8) {
          setText(labelMap[classes[0][i]]);
          console.log(text);
          break;
        }
      }

      tf.dispose(img);
      tf.dispose(resized);
      tf.dispose(casted);
      tf.dispose(expanded);
      tf.dispose(obj);
    }
  };

  useEffect(() => {
    runCoco();
  }, []);

  return (
    <S.CameraContainer>
      {camera && (
        <Webcam
          ref={webcamElementRef}
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
