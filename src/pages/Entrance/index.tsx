import React from "react";
import Box from "@/components/layout/Box";

type EntranceProps = {
  setUserName: (value: string) => void;
  register_user: () => void;
  login: () => void;
};

const newSx = {
  width: "597px",
  height: "705px",
  background: "#FFFFFF",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
};

const Entrance = ({ setUserName, register_user, login }: EntranceProps) => {
  return (
    <Box sx={{ background: "#F9F7F5", width: "100%", height: "100%" }}>
      name
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
      <button onClick={register_user}>新規作成</button>
      <br />
      name
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
      <button onClick={login}>ログイン</button>
    </Box>
  );
};

export default Entrance;
