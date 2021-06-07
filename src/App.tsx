import React, { Fragment, useState } from "react";

type FormElement = React.FormEvent<HTMLFormElement>;
interface ITask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask("");
  };

  const addTask = (name: string) => {
    const newTasks: ITask[] = [...tasks, { name, done: false }];
    setTasks(newTasks);
  };

  const doneTask = (i: number) => {
    const newTasks: ITask[] = [...tasks];
    newTasks[i].done = !newTasks[i].done;
    setTasks(newTasks);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />
        <button type="submit">Send</button>
      </form>
      {tasks &&
        tasks.map((t: ITask, i: number) => {
          return (
            <div>
              <h2
                style={{ textDecoration: t.done ? "line-through" : "" }}
                key={i}
              >
                {t.name}
              </h2>

              <button onClick={() => doneTask(i)}>
                {t.done === false ? "❌" : "✅"}
              </button>
            </div>
          );
        })}
    </Fragment>
  );
}

export default App;
