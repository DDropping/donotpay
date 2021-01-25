import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

const Container = styled.div``;

const AddTaskContainer = styled.div`
  border-radius: 5px;
  display: flex;
  justify-content: ${({ isActive }) => (isActive ? "" : "center")};
  flex-direction: ${({ isActive }) => (isActive ? "column" : "row")};
  align-items: center;
  cursor: pointer;
  background-color: white;
  transition: all 0.3s;
`;

const ConfirmTask = styled.button`
  margin: 1em 0;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

const Input = styled.input`
  margin-top: 1em;
  width: 90%;
`;

const AddTask = ({ tasks, updateTasks }) => {
  const [isActive, setActive] = useState(false);
  const [task, setTask] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.stopPropagation();
    updateTasks([
      {
        title: task,
        author: author,
        id: Date.now().toString(),
        date: Date.now(),
      },
      ...tasks,
    ]);
    setTask("");
    setAuthor("");
    setActive(false);
  };

  const handleActivate = () => {
    setActive(true);
  };

  return (
    <Container>
      <AddTaskContainer onClick={handleActivate} isActive={isActive}>
        {!isActive && <AiOutlinePlus style={{ fontSize: "2rem" }} />}
        {isActive && (
          <Input
            placeholder="Task Desc."
            onChange={(e) => setTask(e.target.value)}
            value={task}
          ></Input>
        )}
        {isActive && (
          <Input
            placeholder="Author"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          ></Input>
        )}
        {isActive && <ConfirmTask onClick={handleSubmit}>Add Task</ConfirmTask>}
      </AddTaskContainer>
    </Container>
  );
};

export default AddTask;
