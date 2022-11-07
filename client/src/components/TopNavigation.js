import {
  UserOutlined,
  LogoutOutlined,
  HomeOutlined,
  TagsOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const TopNavigation = () => (
  <Menu
    theme="dark"
    mode="horizontal"
    defaultSelectedKeys={[window.location.pathname]}
    // items={items1}
  >
    <Menu.Item key="/" UserOutlined={<HomeOutlined />}>
      <Link to="/">Home</Link>
    </Menu.Item>
    <Menu.Item key="/products" UserOutlined={<TagsOutlined />}>
      <Link to="/products">Products</Link>
    </Menu.Item>
    <Menu.Item key="/customers" UserOutlined={<UserOutlined />}>
      <Link to="/customers">Customers</Link>
    </Menu.Item>
    <Menu.Item key="/logout" UserOutlined={<LogoutOutlined />}>
      Logout
    </Menu.Item>
  </Menu>
);
export default TopNavigation;
