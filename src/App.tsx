import React, { useEffect, useState } from "react";
import Entrance from "@/pages/Entrance";
import type Task from "@/types/task";
import type Friend from "@/types/friend";
import Main from "@/pages/Main";

function App() {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");

  const [friendChoice, setFriendChoice] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState(0);
  const [deadline, setDeadline] = useState("");

  const [myTasks, setMyTasks] = useState<Task[]>([]);
  const [friendTasks, setFriendTasks] = useState<Task[]>([]);

  const [friendName, setFriendName] = useState("");

  const [friends, setFriends] = useState<Friend[]>([]);

  const [point, setPoint] = useState(0);

  const register_user = () => {
    fetch("http://20.243.218.76/api/register_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        setUserId(data.user_id);
      });
  };

  const login = () => {
    fetch("http://20.243.218.76/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        setUserId(data.user_id);
      });
  };

  useEffect(() => {
    if (userId !== "") {
      getFriends();
    }
  }, [userId]);

  const register_task = () => {
    fetch("http://20.243.218.76/api/register_task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        friend_name: friendChoice,
        title: title,
        description: description,
        weight: weight,
        deadline: deadline,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        getTasksByFriend();
        getTasksByMe();
      });
  };

  const getTasksByFriend = () => {
    fetch("http://20.243.218.76/api/get_tasks_by_friend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        friend_name: friendChoice,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        setMyTasks(data.tasks);
      });
  };

  const getTasksByMe = () => {
    fetch("http://20.243.218.76/api/get_tasks_by_me", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        friend_name: friendChoice,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        setFriendTasks(data.tasks);
      });
  };

  const getPoint = () => {
    fetch("http://20.243.218.76/api/get_point", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        friend_name: friendChoice,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        setPoint(data.point);
      });
  };

  useEffect(() => {
    if (friendChoice !== "") {
      getTasksByFriend();
      getTasksByMe();
      getPoint();
    }
  }, [friendChoice]);

  const registerFriend = () => {
    fetch("http://20.243.218.76/api/register_friend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        name: friendName,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        getFriends();
      });
  };

  const getFriends = () => {
    fetch("http://20.243.218.76/api/get_friends", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        setFriends(data.friends);
      });
  };

  const updateTaskStatus = (task_id: number, status: string) => {
    fetch("http://20.243.218.76/api/update_task_status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task_id: task_id,
        user_id: userId,
        friend_name: friendChoice,
        status: status,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        getTasksByFriend();
        getTasksByMe();
      });
  };

  const logout = () => {
    //reset
    setUserName("");
    setFriendName("");
    setFriendChoice("");
    setTitle("");
    setDescription("");
    setWeight(0);
    setDeadline("");
    setFriends([]);
    setMyTasks([]);
    setFriendTasks([]);
    setPoint(0);
    setUserId("");
  };

  const refresh = () => {
    getFriends();
    getTasksByFriend();
    getTasksByMe();
    getPoint();
  };

  return (
    <>
      {userId === "" ? (
        <>
          <Entrance
            setUserName={setUserName}
            register_user={register_user}
            login={login}
          />
        </>
      ) : (
        <Main
          userName={userName}
          point={point}
          friends={friends}
          friendTasks={friendTasks}
          myTasks={myTasks}
          logout={logout}
          refresh={refresh}
          registerFriend={registerFriend}
          setFriendName={setFriendName}
          setTitle={setTitle}
          setDescription={setDescription}
          setWeight={setWeight}
          setDeadline={setDeadline}
          register_task={register_task}
          setFriendChoice={setFriendChoice}
          updateTaskStatus={updateTaskStatus}
        />
      )}
    </>
  );
}

export default App;
