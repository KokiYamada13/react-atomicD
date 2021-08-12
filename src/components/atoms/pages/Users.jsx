// import React, { useContext } from "react";
import styled from "styled-components";
// import { UserContext } from "../../../providers/UserProvider";

import { SearchInput } from "../../molecules/SearchInput";
import { UserCard } from "../../organisms/user/UserCard";
import { SecondaryButton } from "../button/SecondaryButton";
import { useRecoilState } from "recoil";
import { userState } from "../../../store/useState";

// const users = {
//   name: "じゃけぇ",
//   image: "https://source.unsplash.com/NEOXVGKTmcA",
//   email: "@gmail",
//   phone: "0210-444-444",
//   company: {
//     name: "テスト"
//   },
//   website: "https://uhuhu"
// };

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `じゃけぇ${val}`,
    image: "https://source.unsplash.com/NEOXVGKTmcA",
    email: "@gmail",
    phone: "0210-444-444",
    company: {
      name: "テスト"
    },
    website: "https://uhuhu"
  };
});

export const Users = () => {
  //const { userInfo, setUserInfo } = useContext(UserContext);

  const [userInfo, setUserInfo] = useRecoilState(userState);

  const onClickSwitch = () => setUserInfo({ isAdimn: !userInfo.isAdimn });

  return (
    <Scontainer>
      <h2>TOPページpe-zi</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((obj) => (
          <UserCard key={obj.id} user={obj} />
        ))}
      </SUserArea>
    </Scontainer>
  );
};

const Scontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  paddidng-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1ft));
  grid-gap: 20px;
`;
