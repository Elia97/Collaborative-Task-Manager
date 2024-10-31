import { CircleCheckBig, TriangleAlert, Info } from "lucide-react";

export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: state.length,
          title: action.payload.title,
          completed: false,
          assignedTo: action.payload.assignedTo,
        },
      ];
    case "COMPLETE_TASK":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload.id);
    default:
      return state;
  }
};

export const alertReducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        ...state,
        message: action.payload.message,
        visible: true,
        icon: <CircleCheckBig />,
      };
    case "ERROR":
      return {
        ...state,
        message: action.payload.message,
        visible: true,
        icon: <TriangleAlert />,
      };
    case "INFO":
      return {
        ...state,
        message: action.payload.message,
        visible: true,
        icon: <Info />,
      };
    case "HIDE_ALERT":
      return {
        ...state,
        visible: false,
      };
    default:
      return state;
  }
};
