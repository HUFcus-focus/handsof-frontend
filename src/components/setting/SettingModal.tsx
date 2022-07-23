import { CancelSVG } from "assets/svg";
import { Background, Window, Popup } from "components/setting/Modal";
import * as S from "components/setting/SettingModal.styled";

const SettingModal = (props) => {
  return (
    <Background>
      <Window>
        <Popup>
          <S.SettingModalContainer>
            <S.SettingModalTitle>
              설정<span style={{ color: "#E56F8C" }}>.</span>
            </S.SettingModalTitle>
            <S.CancelBtn onClick={() => props.setModal(false)}>
              <CancelSVG />
            </S.CancelBtn>
            <S.SettingModalText style={{ marginTop: "85px" }}>
              서비스 연동
            </S.SettingModalText>
            <S.SettingModalText>비디오</S.SettingModalText>
            <S.SettingModalText>계정</S.SettingModalText>
          </S.SettingModalContainer>
        </Popup>
      </Window>
    </Background>
  );
};

export default SettingModal;
