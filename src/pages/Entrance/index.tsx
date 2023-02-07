import React from "react";
import Header from "@/templates/Header";
import Footer from "@/templates/Footer";
import Stack from "@/components/layout/Stack";
import StackRest from "@/components/layout/StackRest";
import StackCenter from "@/components/layout/StackCenter";
import Board from "@/components/dataDisplay/board";

type EntranceProps = {
  setUserName: (value: string) => void;
  register_user: () => void;
  login: () => void;
};

const Entrance = ({ setUserName, register_user, login }: EntranceProps) => {
  return (
    <Stack height="100%">
      <Header />
      <StackRest>
        <StackCenter>
          <Board
            pins="square"
            sx={{ margin: "0 20px", height: "550px", width: "450px" }}
          >
            ユーザーID
            <input type="text" onChange={(e) => setUserName(e.target.value)} />
            <button onClick={login}>ログイン</button>
            <br />
            パスワード
            <input type="text" />
            <button onClick={login}>ログイン</button>
          </Board>
          <Board
            pins="square"
            sx={{ margin: "0 20px", height: "550px", width: "450px" }}
          >
            ユーザーID
            <input type="text" onChange={(e) => setUserName(e.target.value)} />
            <button onClick={register_user}>新規作成</button>
            <br />
            パスワード
            <input type="text" />
            <button onClick={login}>ログイン</button>
          </Board>
        </StackCenter>
      </StackRest>
      <Footer />
    </Stack>
  );
};

export default Entrance;
