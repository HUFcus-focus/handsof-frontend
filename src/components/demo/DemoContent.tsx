import * as S from "components/demo/DemoContent.styled";
import { ReactSVG } from "assets/svg";
import { rabbit } from "assets/img";

const DemoContent = () => {
  return (
    <S.DemoContentLayout>
      <S.DemoContentText fontSize={"2.4rem"} m={"1rem"}>
        CRA Boilerplate
      </S.DemoContentText>
      <ReactSVG width="8rem" height="8rem" fill="#61DAFB" stroke="#ffffff" />
      <S.DemoContentText className="pc-only" m={"1.5rem"}>
        PC
      </S.DemoContentText>
      <S.DemoContentText className="mobile-only" m={"1.5rem"}>
        Mobile
      </S.DemoContentText>
      <img src={rabbit} style={{ width: "25rem" }} alt="rabbit" />
    </S.DemoContentLayout>
  );
};

export default DemoContent;
