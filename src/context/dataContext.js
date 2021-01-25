import React, { useState, createContext } from "react";

export const TasksContext = createContext();

const DEFAULT_STATE = {
  pending: [{ id: 1, title: "task 01", author: "sally", date: Date.now() }],
  progress: [{ id: 1, title: "task 02", author: "sally", date: Date.now() }],
  complete: [{ id: 1, title: "task 03", author: "sally", date: Date.now() }],
};

const TasksContextProvider = (props) => {
  const [pending, setPending] = useState([
    { id: 1, title: "task 01", author: "Sally", date: Date.now() },
  ]);
  const [progress, setProgress] = useState([
    { id: 2, title: "task 02", author: "John", date: Date.now() },
  ]);
  const [complete, setComplete] = useState([
    { id: 3, title: "task 03", author: "Toby", date: Date.now() },
  ]);

  return (
    <TasksContext.Provider
      value={{
        pending,
        setPending,
        progress,
        setProgress,
        complete,
        setComplete,
      }}
    >
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksContextProvider;
