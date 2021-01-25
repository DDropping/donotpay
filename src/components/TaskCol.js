import React from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

import TaskBox from "./TaskBox";
import AddTask from "./AddTask";

const Container = styled.section`
  width: 100%;
  max-width: 400px;
`;

const Header = styled.div`
  margin: 1em;
`;

const TasksContainer = styled.div`
  border-radius: 5px;
  background-color: #eeeeee;
  padding: 1em;
  margin: 1em;
`;

const AddTaskButton = styled.div`
  border-radius: 5px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: white;
`;

const TaskCol = ({ title, tasks, updateTasks }) => {
  return (
    <Container>
      <Header>{title}</Header>
      <TasksContainer>
        <AddTask tasks={tasks} updateTasks={updateTasks} />
        {tasks.map((task, index) => (
          <TaskBox
            title={title}
            key={index}
            task={task}
            updateTasks={updateTasks}
            tasks={tasks}
          />
        ))}
      </TasksContainer>
    </Container>
  );
};

export default TaskCol;
