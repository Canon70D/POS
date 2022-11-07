import {
    UserOutlined,
} from "@ant-design/icons";
import { Menu, Layout } from "antd";
import React from "react";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { Sider } = Layout;



const SideNavigation = () => (
    <Sider width={200} className="site-layout-background">
        <Menu
            style={{ width: 256 }}
            // defaultSelectedKeys={['1']}
            // defaultOpenKeys={['sub1']}
            mode="inline"
        >
            <SubMenu key="sub1" title={<span><UserOutlined type="mail" /><span>Clothes</span></span>}>
                <MenuItemGroup key="g1" title="Tops">
                    <Menu.Item key="1">Shirts</Menu.Item>
                    <Menu.Item key="2">Tshirts</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup key="g2" title="Bottoms">
                    <Menu.Item key="3">Jeans</Menu.Item>
                    <Menu.Item key="4">Trousers</Menu.Item>
                </MenuItemGroup>
            </SubMenu>
            <SubMenu key="sub2" title={<span><UserOutlined type="appstore" /><span>Sports</span></span>}>
                <Menu.Item key="5">Leggings</Menu.Item>
                <Menu.Item key="6">Tank Tops</Menu.Item>
                <SubMenu key="sub3" title="Shoes">
                    <Menu.Item key="7">Adidas</Menu.Item>
                    <Menu.Item key="8">Nike</Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" title={<span><UserOutlined type="setting" /><span>Jewellery</span></span>}>
                <Menu.Item key="9">Necklace</Menu.Item>
                <Menu.Item key="10">Rings</Menu.Item>
                <Menu.Item key="11">Earings</Menu.Item>
                <Menu.Item key="12">Wrist Bands</Menu.Item>
            </SubMenu>
        </Menu>
    </Sider>
);
export default SideNavigation;
