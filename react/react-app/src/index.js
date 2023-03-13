import App from "./App";
import dva from "dva";
import counterModals from "./models/counter";
import studentsModals from "./models/students";
const app = dva();

app.model(counterModals);
app.model(studentsModals);

app.router(App);

app.start(document.querySelector("#root"));
