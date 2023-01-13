import React from "react";
import {
  Switch,
  Route,
  Link,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  News,
  CryptoDetailes,
} from "./components/index";
import "./App.css";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
const App = () => {
  return (
    <div className="app">
      <Layout>
        <Navbar />
      </Layout>
    </div>
  );
};

export default App;
