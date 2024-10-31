import { useState } from "react";
import { useContext } from "react";
import { TaskContext } from "./contextApi/TaskContext";
import { AlertContext } from "./contextApi/AlertContext";

const InputDialog = () => {
  const { addUser } = useContext(TaskContext);
  const { showSuccessAlert, showErrorAlert, hideAlert } =
    useContext(AlertContext);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleClose = () => {
    setOpen(false);
    setInputValue("");
  };

  const handleSubmit = () => {
    if (inputValue) {
      addUser(inputValue);
      showSuccessAlert("User added successfully.");
      setTimeout(() => {
        hideAlert();
      }, 6000);
    } else {
      showErrorAlert("Choose a name");
    }
    handleClose();
  };

  return (
    <>
      <button
        type="button"
        className="px-5 py-2.5 bg-zinc-200 rounded-lg shadow-lg text-sm hover:bg-zinc-300 focus:ring-1 ring-foreground"
        onClick={() => setOpen(true)}
      >
        {"Add User"}
      </button>
      <div>
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${
            !open ? "hidden" : ""
          }`}
          onClick={(e) => e.target.dataset.overlay && handleClose()}
          data-overlay
        >
          <div className="relative rounded-lg shadow-lg bg-background space-y-8 px-4 py-8">
            <div className="relative space-y-8 p-4">
              <label
                htmlFor="name"
                className="block w-full px-5 py-2.5 bg-zinc-200 rounded-lg shadow-lg text-sm"
              >
                {"Choose a name"}
              </label>
              <input
                type="text"
                id="name"
                className="block w-full px-5 py-2.5 bg-zinc-200 rounded-lg shadow-lg text-sm focus:ring-1 ring-foreground"
                placeholder="What's your name?"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="text-center space-x-4 p-4">
              <button
                type="button"
                className="px-5 py-2.5 bg-zinc-200 rounded-lg shadow-lg text-center hover:bg-zinc-300 focus:ring-1 ring-foreground"
                onClick={handleClose}
              >
                {"Cancel"}
              </button>
              <button
                type="button"
                className="px-5 py-2.5 bg-zinc-200 rounded-lg shadow-lg text-center hover:bg-zinc-300 focus:ring-1 ring-foreground"
                onClick={handleSubmit}
              >
                {"Add User"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputDialog;
