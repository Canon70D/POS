import React, { useState } from "react";
import { Layout, Menu } from "antd";
import "../styles/BasicLayout.css";
import TopNavigation from "./TopNavigation";
import SideNavigation from "./SideNavigation";

const { Header, Content } = Layout;

// If user has clicked on an item  from the side menu

const BasicLayout = ({ children, hello }) => {
  const [itemSelected, setItemSelected] = useState("Hey");

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <TopNavigation />
      </Header>
      <Layout>
        <SideNavigation />
        <Layout
import TopNavigation from "./TopNavigation";
import SideNavigation from "./SideNavigation";

const { Header, Content } = Layout;

// If user has clicked on an item  from the side menu

const BasicLayout = ({children, hello}) => {

  const [itemSelected, setItemSelected] = useState("Hey");
  
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <TopNavigation />
      </Header>
      <Layout>
        <SideNavigation />
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
            {hello}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default BasicLayout;
