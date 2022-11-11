import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const TopNavigation = () => (
  <Menu
    theme="dark"
    mode="horizontal"
    defaultSelectedKeys={[window.location.pathname]}
    // items={items1}
  >
    <Menu.Item key="/">
      <Link to="/">Home</Link>
    </Menu.Item>
    <Menu.Item key="/products">
      <Link to="/products">Products</Link>
    </Menu.Item>
    <Menu.Item key="/customers">
      <Link to="/customers">Customers</Link>
    </Menu.Item>
    <Menu.Item key="/logout">
      {" "}
      <a href="/" onClick={() => Auth.logout()}>
        Logout
      </a>
    </Menu.Item>
  </Menu>
);
export default TopNavigation;
