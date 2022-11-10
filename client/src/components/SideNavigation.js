import React, { Fragment, useState, useEffect } from 'react'
import { useQuery } from "@apollo/client";
// import { UserOutlined } from "@ant-design/icons";
import { Menu, Layout } from "antd";
// Import the query we are going to execute from its file
import { QUERY_CATEGORIES, SUB_CATEGORIES_BY_CATEGORY, PRODUCTS_SUBCAT_CAT, PRODUCT_BY_SUBCATEGORY } from "./../utils/queries";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const { Sider } = Layout;


const SideNavigation = () => {

  // const [testState, setTestState] = useState(0);
  const [categoryId, setCategoryId] = useState(0);
  const [subCategoryId, setSubCategoryId] = useState(0);

  // Execute the query on component load
  const { data: QUERY_CATEGORIES_DATA } = useQuery(QUERY_CATEGORIES);
  const categoryData = QUERY_CATEGORIES_DATA?.categories || [];

  var categoryDataID = (Object.keys(categoryData)).map(function (key) {
    return categoryData[key]._id
  });
  // var categoryDataIDName = (Object.keys(categoryData)).map(function (key) {
  //   return ({"categoryId": categoryData[key]._id, "categoryName": categoryData[key].name})
  // });
  // // console.log(categoryData);

  // var treeObj = [];

  // const testLoop = ()=>{
  //   treeObj = {category: categoryDataIDName};
  //   // console.log(treeObj);
  //   Object.keys(treeObj).map(function (key){
  //     return console.log(treeObj[key]);
  //   })
  //   categoryDataID.map(function (item){
  //     setTestState(item)
  //   })    
  //   // console.log(testState);
  //   // console.log("hey");
  // }

  // console.log(testState);

  const { data: SUB_CATEGORIES_BY_CATEGORY_DATA } = useQuery(SUB_CATEGORIES_BY_CATEGORY, {
    variables: { category: categoryId },
  });
  
  const subCategoryByCategoryData = SUB_CATEGORIES_BY_CATEGORY_DATA?.subCategoriesById || [];


  const { data: PRODUCT_BY_SUBCATEGORY_DATA } = useQuery(PRODUCT_BY_SUBCATEGORY, {
    variables: { subcategory: subCategoryId },
  });
  const productBySubcategoryData = PRODUCT_BY_SUBCATEGORY_DATA?.productById || [];

  // useEffect(() => {
  //   testLoop();
  // }, []);


  const clickOnMenu = (id) => {
    setCategoryId(id)
    console.log(categoryId);
  }
  const clickOnMenuItemGroup = (id) => {
    setSubCategoryId(id)
  }

  const clickOnMenuItem = (id) => {
    console.log(id);
  }


  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        style={{ width: 256 }}
        mode="inline"
      >
        {(Object.keys(categoryData)).map(function (key1) {

          return (
            <SubMenu
              key={categoryData[key1]._id}
              title={categoryData[key1].name}
              onTitleClick={() => clickOnMenu(categoryData[key1]._id)}
            >
              {(Object.keys(subCategoryByCategoryData)).map(function (key2) {
                return (
                  <Fragment>
                    <SubMenu
                      key={subCategoryByCategoryData[key2]._id}
                      title={subCategoryByCategoryData[key2].name}
                      onTitleClick={() => clickOnMenuItemGroup(subCategoryByCategoryData[key2]._id)}
                      onTitleMouseEnter={() => console.log("left")}
                    >
                      {(Object.keys(productBySubcategoryData)).map(function (key3) {
                        return (
                          <Fragment>
                            <Menu.Item key={productBySubcategoryData[key3]._id}
                              onClick={() => clickOnMenuItem(productBySubcategoryData[key3]._id)}
                              onMouseLeave={() => console.log("left")}
                            >
                              {productBySubcategoryData[key3].name}
                            </Menu.Item>
                          </Fragment>
                        )
                      })}
                    </SubMenu>
                  </Fragment>
                )
              })}
            </SubMenu>
          );
        })}
      </Menu>
    </Sider>
  );
};
export default SideNavigation;
