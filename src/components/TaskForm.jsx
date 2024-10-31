import { useForm } from "react-hook-form";
import { useContext } from "react";
import { TaskContext } from "./contextApi/TaskContext";
import { AlertContext } from "./contextApi/AlertContext";
import UserSelector from "./UserSelector";
import Alert from "./Alert";
import TitleInput from "./TitleInput";
import Submit from "./Submit";

const TaskForm = () => {
  const { addTask } = useContext(TaskContext);
  const { alert, showSuccessAlert, hideAlert } = useContext(AlertContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ title, assignedTo }) => {
    addTask(title, assignedTo);
    reset();
    showSuccessAlert("Task created successfully.");
    setTimeout(() => {
      hideAlert();
    }, 6000);
  };

  return (
    <>
      <form
        className="bg-zinc-50 p-4 rounded-lg shadow-lg space-y-8 min-w-72"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="mb-8 font-bold text-center text-xl leading-none tracking-tight md:text-2xl lg:text-3xl">
          {"Insert your own tasks"}
        </h2>
        <TitleInput register={register} errors={errors} />
        <UserSelector register={register} errors={errors} />
        <Submit>{"Add task"}</Submit>
      </form>
      <Alert
        message={alert.message}
        visible={alert.visible}
        icon={alert.icon}
        onClose={hideAlert}
      />
    </>
  );
};

export default TaskForm;
