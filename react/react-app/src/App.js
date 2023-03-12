import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as pages from "./pages";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./store/action";
export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<pages.Home />}></Route>
          <Route path="/navbar" element={<pages.NavBar />}></Route>
          <Route path="/news" element={<pages.News />}></Route>
          <Route path="/personal" element={<pages.Personal />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
