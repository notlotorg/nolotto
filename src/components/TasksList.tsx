import React from "react";
import { ITask } from "../models/ITask";
import { createUseStyles } from "react-jss";
import { Spinner } from "./Spinner";
import CheckIcon from "../assets/svg/check-mark.svg";
import ExIcon from "../assets/svg/ex-mark.svg";

type TasksListProps = {
  tasks: ITask[];
  title: string;
  isLoading?: boolean;
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
    backgroundColor: "var(--color-grey)",
    borderRadius: 50,
    padding: "0 14px 0 0",
    gap: 20,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    background: "var(--color-orange)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  meta: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
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
    width: 24,
    height: 24,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    // border: "2px solid #000",
    "& svg": {
      width: "100%",
      height: "100%",
    },
  },
});

export const TasksList: React.FC<TasksListProps> = ({
  tasks,
  title,
  isLoading,
}) => {
  const classes = styles();

  return (
    <>
      <div className={classes.listTitle}>{title}</div>
      {isLoading && <Spinner />}
      <ul className={classes.list}>
        {tasks.map((task) => (
          <li key={task.id} className={classes.item}>
            <div className={classes.icon}>I</div>
            <div className={classes.meta}>
              <div className={classes.title}>{task.title}</div>
              <div className={classes.prize}>{task.prize} LOT</div>
            </div>
            <div className={classes.completeIndicator}>
              {task.completed ? <CheckIcon /> : <ExIcon />}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
