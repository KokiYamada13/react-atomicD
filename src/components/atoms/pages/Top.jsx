import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

import { SecondaryButton } from "../button/SecondaryButton";
// import { UserContext } from "../../../providers/UserProvider";
import { userState } from "../../../store/useState";

export const Top = () => {
  const history = useHistory();

  // const { setUserInfo } = useContext(UserContext);
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <Scontainer>
      <h2>TOPページpe-zi</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </Scontainer>
  );
};

const Scontainer = styled.div`
  text-align: center;
`;
