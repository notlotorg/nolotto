import React from "react";
import { tasksService } from "../services/tasks.service";
import { ITask } from "../models/ITask";
import { TasksList } from "../components/TasksList";

export const TasksPage = () => {
  const [tasks, setTasks] = React.useState<ITask[]>([]);
  const [dailyTasks, setDailyTasks] = React.useState<ITask[]>([]);
  const [friendsTasks, setFriendsTasks] = React.useState<ITask[]>([]);

  const _getAllTasks = () => {
    return Promise.all([
      tasksService.getGlobalTasks(),
      tasksService.getDailyTasks(),
      tasksService.getFriendsTasks(),
    ]);
  };

  React.useEffect(() => {
    _getAllTasks().then(([globalTasks, dailyTasks, friendsTasks]) => {
      setTasks(globalTasks);
      setDailyTasks(dailyTasks);
      setFriendsTasks(friendsTasks);
    });
  }, []);

  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <h1>Get more LOT and compete</h1>
      <div>
        <TasksList tasks={tasks} title="Global tasks" />
      </div>
      <div>
        <TasksList tasks={dailyTasks} title="Daily tasks " />
      </div>
      <div>
        <TasksList tasks={friendsTasks} title="Friends tasks" />
      </div>
    </div>
  );
};
