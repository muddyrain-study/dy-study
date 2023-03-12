import store from "./index";
import { actions as counter } from "./action/counter";

window.increase = () => store.dispatch(counter.increase());
window.decrease = () => store.dispatch(counter.decrease());
window.asyncIncrease = () => store.dispatch(counter.asyncIncrease());
window.asyncDecrease = () => store.dispatch(counter.asyncDecrease());
window.add = (payload) => store.dispatch(counter.add(payload));
