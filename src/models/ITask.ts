export interface ITask {
  id: string;
  title: string;
  description?: string;
  prize: number;
  icon: string;
  completed: boolean;
  createdAt: string;
}
