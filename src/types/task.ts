type Task = {
    id: number;
    user_id: number;
    friend_id: number;
    title: string;
    description: string;
    weight: number;
    deadline: string;
    status: "依頼中" | "受注中" | "完了済";
};

export default Task;

