import React from "react";
import { ITask } from "../models/ITask";
import { createUseStyles } from "react-jss";
import { Spinner } from "./Spinner";

type TasksListProps = {
  tasks: ITask[];
  title: string;
  onItemComplete?: (task: ITask) => void;
  onItemClicked?: (task: ITask) => void;
};

const styles = createUseStyles({
  listTitle: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 10,
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  item: {
    marginBottom: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 20,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    background: "var(--color-orange)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  meta: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
  },
  description: {
    fontSize: 14,
  },
  prize: {
    fontSize: 12,
    fontWeight: 700,
    color: "var(--color-orange)",
  },
  completeIndicator: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    justifySelf: "flex-end",
    border: "2px solid #000",
  },
});

export const TasksList: React.FC<TasksListProps> = ({ tasks, title }) => {
  const classes = styles();

  return (
    <>
      <div className={classes.listTitle}>{title}</div>
      <Spinner />
      <ul className={classes.list}>
        {tasks.map((task) => (
          <li key={task.id} className={classes.item}>
            <div className={classes.icon}>I</div>
            <div className={classes.meta}>
              <div className={classes.title}>{task.title}</div>
              <div className={classes.prize}>{task.prize} LOT</div>
            </div>
            <div className={classes.completeIndicator}>X</div>
          </li>
        ))}
      </ul>
    </>
  );
};
