import * as S from "components/log/LogContent.styled";
import { Title, TitleLine } from "components/common/shared";
import { LogMessage } from "components/log";
import { useState, useEffect } from "react";

const LogContent = () => {
  const [messageList, setMessageList] = useState([]);

  /* useEffect(() => {
    fetch("https://api.handsof.today/chat/slack/62dbd9ba9e804cba2f19ea16", {})
      .then((response) => response.json())
      .then((data) => {
        setMessageList(data);
      });
  }, []); */

  return (
    <>
      <Title>
        채팅 목록<span style={{ color: "#F4BF4F" }}>.</span>
        <TitleLine />
      </Title>
      <S.LogContentContainer>
        {/* {messageList.map((e) => (
          <LogMessage key={e.id} date={e.createdAt} text={e.message} />
        ))} */}
        <LogMessage date={"2022.07.24 21:38"} text={"힘들 것 같아요 :("} />
        <LogMessage date={"2022.07.23 9:16"} text={"좋아요!!"} />
        <LogMessage date={"2022.07.23 7:41"} text={"안녕하세요!"} />
        <LogMessage date={"2022.07.22 9:16"} text={"사랑해요 :>"} />
        <LogMessage date={"2022.07.21 17:32"} text={"감사해요 :)"} />
        <LogMessage date={"2022.07.24 21:38"} text={"힘들 것 같아요 :("} />
        <LogMessage date={"2022.07.19 17:21"} text={"안녕하세요!"} />
      </S.LogContentContainer>
    </>
  );
};

export default LogContent;
