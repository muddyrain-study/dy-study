import "./page.css";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import CounterContainer from "./components/counterContainer";

export function NavBar() {
  return (
    <div className="header">
      <NavLink to="/">首页</NavLink>
      <NavLink to="/news">新闻页</NavLink>
      <NavLink to="/personal">个人中心</NavLink>
    </div>
  );
}

export function Home() {
  const navigate = useNavigate();
  return (
    <div className="page home">
      <CounterContainer />
      <button
        onClick={() => {
          navigate("/news");
        }}
      >
        news
      </button>
    </div>
  );
}

export function News() {
  const navigate = useNavigate();
  return (
    <div className="page news">
      <h1>新闻页</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        news
      </button>
    </div>
  );
}

export function Personal() {
  return (
    <div className="page personal">
      <h1>个人中心</h1>
    </div>
  );
}
