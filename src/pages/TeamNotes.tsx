import { useState } from "react";
import Notes, { PostIt } from "../components/Notes";

const TeamNotes = () => {
  const [tasks, setTasks] = useState<PostIt[]>([]);
  const addTask = (text: string) => {
    if (text.trim() === "") return;

    const newTask: PostIt = {
      text,
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <div>
        <button onClick={() => addTask("A")}>Add</button>

        <Notes notes={tasks} />
      </div>
    </>
  );
};

export default TeamNotes;
