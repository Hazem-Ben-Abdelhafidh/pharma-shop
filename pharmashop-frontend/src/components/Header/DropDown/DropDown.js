import classes from "./DropDown.module.scss";
import Logo from "../../Logo/Logo";
import NavLinks from "../NavLinks/NavLinks";
import useLogout from "../../../CustomHooks/useLogout";
const DropDown = ({show,showDrop}) => {
    const logout= useLogout();
    return ( 
        <div className={show? classes.DropDown : classes.show}>
        <div className={classes.container}>
            <div className={classes.Logo}><Logo/></div>
            
            <NavLinks logout={logout} showDrop={showDrop}/>
            </div>
        </div>
     );
}
 
export default DropDown;