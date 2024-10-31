import { AlertProvider } from "./components/contextApi/AlertContext";
import HomePage from "./components/HomePage";
import ListPage from "./components/ListPage";
import { TaskProvider } from "./components/contextApi/TaskContext";
import TaskForm from "./components/TaskForm";
import {
  TaskListWrapper,
  TaskListTitle,
  TaskList,
} from "./components/taskList";

const App = () => {
  return (
    <TaskProvider>
      <AlertProvider>
        <HomePage>
          <TaskForm />
        </HomePage>
      </AlertProvider>
      <ListPage>
        <TaskListWrapper completed={false}>
          <TaskListTitle />
          <TaskList />
        </TaskListWrapper>
        <TaskListWrapper completed={true}>
          <TaskListTitle />
          <TaskList />
        </TaskListWrapper>
      </ListPage>
    </TaskProvider>
  );
};

export default App;
