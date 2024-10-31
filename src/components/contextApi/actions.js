export const addTask = (dispatch, title, assignedTo) =>
  dispatch({ type: "ADD_TASK", payload: { title, assignedTo } });

export const addUser = (setUsers, user) => {
  if (user) setUsers((prevUsers) => [...prevUsers, user]);
};

export const completeTask = (dispatch, id) =>
  dispatch({ type: "COMPLETE_TASK", payload: { id } });

export const removeTask = (dispatch, id) =>
  dispatch({ type: "REMOVE_TASK", payload: { id } });

export const getCompletedTasks = (tasks) => {
  return tasks.filter((task) => task.completed);
};

export const getInCompletedTasks = (tasks) => {
  return tasks.filter((task) => !task.completed);
};

export const showSuccessAlert = (dispatch, message) => {
  dispatch({ type: "SUCCESS", payload: { message } });
};

export const showErrorAlert = (dispatch, message) => {
  dispatch({ type: "ERROR", payload: { message } });
};

export const hideAlert = (dispatch) => {
  dispatch({ type: "HIDE_ALERT" });
};
