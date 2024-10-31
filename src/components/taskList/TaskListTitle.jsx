import PropTypes from "prop-types";
import { memo } from "react";

const TaskListTitle = memo(({ completed, tasks }) => {
  return (
    <h2 className="mb-8 font-bold text-center text-xl leading-none tracking-tight md:text-2xl lg:text-3xl">
      {completed ? "Completed Tasks" : "Tasks"} ({tasks.length})
    </h2>
  );
});

TaskListTitle.displayName = "TaskList title";

TaskListTitle.propTypes = {
  completed: PropTypes.bool,
  tasks: PropTypes.array,
};

export default TaskListTitle;
