import { useState } from "react";
import CategoriesBar from "./CategoriesNav"
import DropDown from "./DropDown/DropDown";
import ToolBar from "./ToolBar/ToolBar"

const Header = () => {
    const [show,setShow] = useState(true);
    const showDrop= ()=>{
        setShow(!show);
    }
    return ( 
        <header>
            <DropDown show={show} showDrop={showDrop}/>
            <ToolBar showDrop={showDrop} show={show}/>
            <CategoriesBar/>
            
        </header>

     );
}
 
export default Header;