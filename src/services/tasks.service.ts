import { ITask } from "../models/ITask";

const getDailyTasks = async (): Promise<ITask[]> => {
  return new Promise<ITask[]>((resolve) => {
    setTimeout(() => {
      resolve(dailyTasksMock);
    }, 1000);
  });
};

const getGlobalTasks = async (): Promise<ITask[]> => {
  return new Promise<ITask[]>((resolve) => {
    setTimeout(() => {
      resolve(tasksMock);
    }, 1000);
  });
};

const getFriendsTasks = async (): Promise<ITask[]> => {
  return new Promise<ITask[]>((resolve) => {
    setTimeout(() => {
      resolve(friendsMockTasks);
    }, 1000);
  });
};

const tasksMock: ITask[] = [
  // tasks subscribe to instagram and twitter
  {
    id: "2",
    title: "Subscribe to Instagram",
    description: "Subscribe to the Instagram and follow the account",
    completed: false,
    createdAt: new Date().toISOString(),
    icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    prize: 100,
  },
  {
    id: "3",
    title: "Subscribe to Twitter",
    description: "Subscribe to the Twitter and follow the account",
    completed: false,
    createdAt: new Date().toISOString(),
    icon: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
    prize: 100,
  },
  {
    id: "4",
    title: "Subscribe to the channel",
    description: "Subscribe to the channel and hit the bell icon",
    completed: false,
    createdAt: new Date().toISOString(),
    icon: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png",
    prize: 100,
  },
];

const dailyTasksMock: ITask[] = [
  // play 3 times, collect 1000 balls,
  {
    id: "1",
    title: "Play 3 times",
    description: "Play 3 times to get the reward",
    completed: false,
    createdAt: new Date().toISOString(),
    icon: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png",
    prize: 100,
  },
  {
    id: "2",
    title: "Collect 1000 balls",
    description: "Collect 1000 balls to get the reward",
    completed: false,
    createdAt: new Date().toISOString(),
    icon: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png",
    prize: 100,
  },
];

const friendsMockTasks: ITask[] = [
  // invite 3 friends, play with friends
  {
    id: "1",
    title: "Invite 3 friends",
    description: "Invite 3 friends to get the reward",
    completed: false,
    createdAt: new Date().toISOString(),
    icon: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png",
    prize: 100,
  },
  {
    id: "2",
    title: "Play with friends",
    description: "Play with friends to get the reward",
    completed: false,
    createdAt: new Date().toISOString(),
    icon: "https://cdn-icons-png.flaticon.com/512/1077/1077035.png",
    prize: 100,
  },
];

export const tasksService = {
  getDailyTasks,
  getGlobalTasks,
  getFriendsTasks,
};
