import React, { useContext } from "react";
import styled from "styled-components";

import TaskCol from "./TaskCol";
import { TasksContext } from "../context/dataContext";

const Container = styled.section`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
`;

const TopBar = styled.div`
  width: 100%;
  height: 25px;
  background-color: #3c77ea;
  max-width: 1200px;
  margin: 0 auto;
`;

const KanBanBoard = () => {
  const {
    pending,
    setPending,
    progress,
    setProgress,
    complete,
    setComplete,
  } = useContext(TasksContext);

  return (
    <div>
      <TopBar />
      <Container>
        <TaskCol
          title="Pending Task"
          tasks={pending}
          updateTasks={setPending}
        />
        <TaskCol
          title="In Progress"
          tasks={progress}
          updateTasks={setProgress}
        />
        <TaskCol title="Completed" tasks={complete} updateTasks={setComplete} />
      </Container>
    </div>
  );
};

export default KanBanBoard;
