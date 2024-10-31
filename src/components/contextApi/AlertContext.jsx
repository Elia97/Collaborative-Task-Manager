import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { alertReducer } from "./reducers";
import { showSuccessAlert, hideAlert, showErrorAlert } from "./actions";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, dispatch] = useReducer(alertReducer, {
    message: "",
    visible: false,
    icon: <></>,
  });

  const contextValue = {
    alert,
    showSuccessAlert: (message) => showSuccessAlert(dispatch, message),
    showErrorAlert: (message) => showErrorAlert(dispatch, message),
    hideAlert: () => hideAlert(dispatch),
  };

  return (
    <AlertContext.Provider value={contextValue}>
      {children}
    </AlertContext.Provider>
  );
};

AlertProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
