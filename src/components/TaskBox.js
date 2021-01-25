import React, { useContext } from "react";
import styled from "styled-components";

import { TasksContext } from "../context/dataContext";

const Container = styled.div`
  border-radius: 5px;
  padding: 0.5em;
  margin: 1em 0;
  background-color: white;
`;
const Title = styled.div``;

const Extra = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
`;

const Options = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
`;

const TaskBox = ({ title, task, tasks, updateTasks }) => {
  const {
    pending,
    setPending,
    progress,
    setProgress,
    complete,
    setComplete,
  } = useContext(TasksContext);

  const handleDelete = () => {
    let filterdTasks = tasks.filter((t) => t.id !== task.id);
    updateTasks(filterdTasks);
  };

  const handleMoveToPending = () => {
    let selectedTask = tasks.find((t) => t.id === task.id);
    handleDelete();
    setPending([selectedTask, ...pending]);
  };

  const handleMoveToProgress = () => {
    let selectedTask = tasks.find((t) => t.id === task.id);
    handleDelete();
    setProgress([selectedTask, ...progress]);
  };

  const handleMoveToComplete = () => {
    let selectedTask = tasks.find((t) => t.id === task.id);
    handleDelete();
    setComplete([selectedTask, ...complete]);
  };

  const handleMoveUp = () => {
    let taskList = [...tasks];
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].id === task.id && i > 0) {
        let temp = taskList[i];
        taskList[i] = taskList[i - 1];
        taskList[i - 1] = temp;
        break;
      }
    }
    updateTasks(taskList);
  };

  const handleMoveDown = () => {
    let taskList = [...tasks];
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].id === task.id && i < taskList.length - 1) {
        let temp = taskList[i];
        taskList[i] = taskList[i + 1];
        taskList[i + 1] = temp;
        break;
      }
    }
    updateTasks(taskList);
  };

  let date = new Date(task.date);

  return (
    <Container>
      <Title>{task.title}</Title>
      <Extra>
        <div>{date.toLocaleDateString()}</div>
        <div>{task.author}</div>
      </Extra>
      <Options>
        <button onClick={handleDelete}>Delete</button>
        {title !== "Pending Task" && (
          <button onClick={handleMoveToPending}>Move to Pending</button>
        )}
        {title !== "In Progress" && (
          <button onClick={handleMoveToProgress}>Move to Progress</button>
        )}
        {title !== "Completed" && (
          <button onClick={handleMoveToComplete}>Move to Completed</button>
        )}
        <button onClick={handleMoveUp}>up</button>
        <button onClick={handleMoveDown}>down</button>
      </Options>
    </Container>
  );
};

export default TaskBox;
