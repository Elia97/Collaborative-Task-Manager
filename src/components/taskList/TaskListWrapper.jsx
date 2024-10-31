import React from "react";
import { useContext } from "react";
import { TaskContext } from "../contextApi/TaskContext";
import PropTypes from "prop-types";

const TaskListWrapper = ({ completed, children }) => {
  const { getCompletedTasks, getInCompletedTasks } = useContext(TaskContext);
  const tasks = completed ? getCompletedTasks() : getInCompletedTasks();

  return (
    <div className="bg-zinc-50 rounded-lg p-4 shadow-lg">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { tasks, completed })
      )}
    </div>
  );
};

TaskListWrapper.propTypes = {
  completed: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default TaskListWrapper;
