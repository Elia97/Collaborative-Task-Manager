import { useContext } from "react";
import { TaskContext } from "./contextApi/TaskContext";
import PropTypes from "prop-types";
import InputDialog from "./InputDialog";

const UserSelector = ({ register, errors }) => {
  const { users } = useContext(TaskContext);

  return (
    <div className="relative flex flex-col sm:flex-row gap-4">
      <label
        htmlFor="assignedTo"
        className="px-5 py-2.5 bg-zinc-200 rounded-lg shadow-lg text-sm"
      >
        {"Assigned to"}
      </label>
      <select
        id="assignedTo"
        className="inline-flex px-5 py-2.5 bg-zinc-200 rounded-lg shadow-lg text-sm hover:cursor-pointer focus:ring-1 ring-foreground"
        {...register("assignedTo", { required: "Select a user" })}
      >
        <option value="">{"-- select --"}</option>
        {users.map((user, index) => {
          return (
            <option key={index} value={user}>
              {user}
            </option>
          );
        })}
      </select>
      {errors.assignedTo && (
        <p className="absolute -bottom-6 text-sm text-red-500">
          {errors.assignedTo.message}
        </p>
      )}
      <InputDialog />
    </div>
  );
};

UserSelector.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default UserSelector;
