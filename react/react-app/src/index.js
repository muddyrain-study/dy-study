import App from "./App";
import dva from "dva";
import counterModals from "./models/counter";
import studentsModals from "./models/students";
import routerConfig from "./routerConfig";
import { createBrowserHistory } from "history";
const app = dva({
  history: createBrowserHistory(),
});

app.model(counterModals);
app.model(studentsModals);

app.router(routerConfig);

app.start(document.querySelector("#root"));
