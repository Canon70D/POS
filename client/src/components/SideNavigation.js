import React, { Fragment, useState, useEffect } from 'react'
import { useQuery } from "@apollo/client";
// import { UserOutlined } from "@ant-design/icons";
import { Menu, Layout } from "antd";
// Import the query we are going to execute from its file
import { QUERY_CAT_SUBCAT_PRODUCT } from "./../utils/queries";

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

const { Sider } = Layout;


const SideNavigation = () => {

  // Execute the query on component load
  const { data: QUERY_CAT_SUBCAT_PRODUCT_DATA } = useQuery(QUERY_CAT_SUBCAT_PRODUCT);
  const categoryData = QUERY_CAT_SUBCAT_PRODUCT_DATA?.categories || [];


  const clickOnMenu = (id) => {
    // console.log(id);
  }
  const clickOnMenuItemGroup = (id) => {
  }

  const clickOnMenuItem = (id) => {
    // console.log(id);
  }


  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        style={{ width: 256 }}
        mode="inline"
      >
        {categoryData.map(function (category) {
          return (
            <SubMenu
              key={category._id}
              title={category.name}
              onTitleClick={() => clickOnMenu(category._id)}
            >
              {(category.subcategories).map(function (subcategories) {
                return (
                  <SubMenu
                    key={subcategories._id}
                    title={subcategories.name}

                  // onTitleClick={() => clickOnMenuItemGroup(subCategoryByCategoryData[key]._id)}
                  // onTitleMouseEnter={() => console.log("left")}
                  >
                    {(subcategories.products).map(function (products) {
                      return (
                        <Menu.Item key={products._id}
                        // onClick={() => clickOnMenuItem(productBySubcategoryData[key3]._id)}
                        // onMouseLeave={() => console.log("left")}
                        >
                          {products.name}
                        </Menu.Item>
                      )
                    })}
                  </SubMenu>
                )
              })}

            </SubMenu>
          )
        })}

      </Menu>
    </Sider>
  );
};
export default SideNavigation;
