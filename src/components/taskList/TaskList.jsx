import PropTypes from "prop-types";
import { useContext } from "react";
import { TaskContext } from "../contextApi/TaskContext";
import TaskListItem from "./TaskListItem";

const TaskList = ({ tasks }) => {
  const { completeTask, removeTask } = useContext(TaskContext);

  const handleClick = (e) => {
    const completeButton = e.target.closest("button[data-complete]");
    const deleteButton = e.target.closest("button[data-delete]");

    if (completeButton)
      completeTask(Number(completeButton.getAttribute("data-complete")));
    if (deleteButton)
      removeTask(Number(deleteButton.getAttribute("data-delete")));
  };

  return (
    <ul className="bg-zinc-200 rounded-lg shadow-lg" onClick={handleClick}>
      {tasks.map((task) => (
        <TaskListItem
          key={task.id}
          task={task}
          className="px-5 py-2.5 hover:bg-zinc-300 flex flex-col sm:flex-row items-center sm:justify-between gap-2 sm:gap-4 rounded-lg"
        />
      ))}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array,
};

export default TaskList;
