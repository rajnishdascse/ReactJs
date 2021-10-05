import React, {useState} from "react";
import "./style.css";
import Menu from "./MenuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";  

const UniqueItem= [
    ...new Set(Menu.map((curElement)=>{
    return curElement.category;

})),
"All",
];
console.log(UniqueItem);

const Restaurant = () => {
     
    const [menuData, setMenuData] = useState(Menu);
    const [menuList,setMenuList] = useState(UniqueItem);

    const filterItem=(category)=>{
        if (category==='All'){
            setMenuData(Menu);
            return;

        }
        const updatedList = Menu.filter((curElement)=>{
            return curElement.category ===category;
        });
        setMenuData(updatedList);
    }
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList}/>
            <MenuCard menuData={menuData}/>  
            
        </>
    );
};
export default Restaurant;
