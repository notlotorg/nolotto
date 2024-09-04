import React, { useState } from "react";
import { tasksService } from "../services/tasks.service";
import { ITask } from "../models/ITask";
import { TasksList } from "../components/TasksList";

export const TasksPage = () => {
  const [tasks, setTasks] = React.useState<ITask[]>([]);
  const [dailyTasks, setDailyTasks] = React.useState<ITask[]>([]);
  const [friendsTasks, setFriendsTasks] = React.useState<ITask[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const _getAllTasks = () => {
    setIsLoading(true);
    return Promise.all([
      tasksService.getGlobalTasks(),
      tasksService.getDailyTasks(),
      tasksService.getFriendsTasks(),
    ]);
  };

  React.useEffect(() => {
    _getAllTasks()
      .then(([globalTasks, dailyTasks, friendsTasks]) => {
        setTasks(globalTasks);
        setDailyTasks(dailyTasks);
        setFriendsTasks(friendsTasks);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        padding: 20,
        // border: "1px solid red",
        maxHeight: "calc(100svh - 180px)",
        overflowY: "auto",
      }}
    >
      <h1>Get more LOT and compete</h1>
      <div>
        <TasksList isLoading={isLoading} tasks={tasks} title="Global tasks" />
      </div>
      <div>
        <TasksList
          isLoading={isLoading}
          tasks={dailyTasks}
          title="Daily tasks"
        />
      </div>
      <div>
        <TasksList
          isLoading={isLoading}
          tasks={friendsTasks}
          title="Friends tasks"
        />
      </div>
    </div>
  );
};
