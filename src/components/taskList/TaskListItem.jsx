import PropTypes from "prop-types";
import { memo } from "react";
import ToolTip from "../ToolTip";
import { Check, Undo, X } from "lucide-react";

const TaskListItem = memo(({ task, className }) => {
  return (
    <li key={task.id} className={className}>
      <span className={task.completed ? "line-through" : ""}>
        <strong>{task.title}</strong> - {task.assignedTo}
      </span>
      <div className="flex gap-2 items-center">
        <ToolTip text={task.completed ? "Undo" : "Complete"}>
          <button
            type="button"
            data-complete={task.id}
            className="focus:ring-1 ring-foreground rounded-lg"
          >
            {task.completed ? <Undo /> : <Check />}
          </button>
        </ToolTip>
        <ToolTip text="Delete">
          <button
            type="button"
            data-delete={task.id}
            className="focus:ring-1 ring-foreground rounded-lg"
          >
            <X />
          </button>
        </ToolTip>
      </div>
    </li>
  );
});

TaskListItem.displayName = "TaskList item";

TaskListItem.propTypes = {
  task: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
};

export default TaskListItem;
