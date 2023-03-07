import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

function A() {
  const [a, setA] = useState(0);
  return <h1>组件A</h1>;
}
function B() {
  return <h1>组件B</h1>;
}
function C() {
  return <h1>组件C</h1>;
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/a" element={<A />} />
        <Route path="/a/b" element={<B />} />
        <Route path="/a/c" element={<C />} />
      </Routes>
    </HashRouter>
  );
}
