import "./styles.css";
import { Router } from "./router/Router";
import { React } from "react";
import { UserProvider } from "./providers/UserProvider";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
  // <BrowserRouter>
  //   <DefaultLayout>
  //     <PrimaryButton>テスト</PrimaryButton>
  //     <SecondaryButton>検索</SecondaryButton>
  //     <br />
  //     <SearchInput />
  //     <UserCard user={user} />
  //   </DefaultLayout>
  // </BrowserRouter>
}
