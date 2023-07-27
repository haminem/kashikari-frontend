import React from "react";
import Box from "@/components/layout/Box";
import Stack from "@/components/layout/Stack";
import type Friend from "@/types/friend";
import type Task from "@/types/task";

type MainProps = {
  userName: string;
  point: number;
  friends: Friend[];
  friendTasks: Task[];
  myTasks: Task[];
  logout: () => void;
  refresh: () => void;
  registerFriend: () => void;
  setFriendName: (e: string) => void;
  setTitle: (e: string) => void;
  setDescription: (e: string) => void;
  setWeight: (e: number) => void;
  setDeadline: (e: string) => void;
  register_task: () => void;
  setFriendChoice: (e: string) => void;
  updateTaskStatus: (id: number, status: string) => void;
};

function Main({
  userName,
  point,
  friends,
  friendTasks,
  myTasks,
  logout,
  refresh,
  registerFriend,
  setFriendName,
  setTitle,
  setDescription,
  setWeight,
  setDeadline,
  register_task,
  setFriendChoice,
  updateTaskStatus,
}: MainProps) {
  return (
    <Stack direction="row" justifyContent="space-evenly">
      <Stack width="20vw">
        <button onClick={logout}>ログアウト</button>
        <br />
        <button onClick={refresh}>更新</button>
        <br />
        Friend_name
        <input type="text" onChange={(e) => setFriendName(e.target.value)} />
        <button onClick={registerFriend}>フレンドを追加</button>
        <br />
        point:{point}
        <br />
        フレンド一覧
        <Stack spacing={2}>
          {friends.map((friend: Friend) => (
            <button
              key={friend.id}
              onClick={() => setFriendChoice(friend.friend_name)}
            >
              {friend.friend_name}
            </button>
          ))}
        </Stack>
      </Stack>
      <Stack width="60vw">
        ユーザー名：{userName}
        <br />
        Title
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        Description
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
        Weight
        <input
          type="number"
          onChange={(e) => setWeight(Number(e.target.value))}
        />
        Deadline
        <input type="date" onChange={(e) => setDeadline(e.target.value)} />
        <br />
        <button onClick={register_task}>送信</button>
        <br />
        タスク一覧
        <Stack direction="row">
          <Box width="50%">
            <ul>
              {friendTasks.map((task: Task) => (
                <li key={task.id}>
                  {task.title}
                  <select
                    defaultValue={task.status}
                    onChange={(e) => updateTaskStatus(task.id, e.target.value)}
                  >
                    <option value="依頼中">依頼中</option>
                    <option value="受注中">受注中</option>
                    <option value="完了済">完了済</option>
                  </select>
                </li>
              ))}
            </ul>
          </Box>
          <Box width="50%">
            <ul>
              {myTasks.map((task: Task) => (
                <li key={task.id}>
                  {task.title}
                  {">>>"}
                  {task.status}
                </li>
              ))}
            </ul>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Main;
