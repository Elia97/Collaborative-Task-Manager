import { useReducer, useState, createContext } from "react";
import PropTypes from "prop-types";
import { taskReducer } from "./reducers";
import {
  addTask,
  addUser,
  completeTask,
  removeTask,
  getCompletedTasks,
  getInCompletedTasks,
} from "./actions";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, [
    { id: 0, title: "prova", assignedTo: "user", completed: false },
  ]);
  const [users, setUsers] = useState([]);
  const contextValue = {
    tasks,
    users,
    addUser: (user) => addUser(setUsers, user),
    addTask: (title, assignedTo) => addTask(dispatch, title, assignedTo),
    completeTask: (id) => completeTask(dispatch, id),
    removeTask: (id) => removeTask(dispatch, id),
    getCompletedTasks: () => getCompletedTasks(tasks),
    getInCompletedTasks: () => getInCompletedTasks(tasks),
  };

  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
};

TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
