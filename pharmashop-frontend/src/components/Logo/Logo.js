import { Link } from "react-router-dom";
import classes from "./Logo.module.scss";
const Logo = () => {
    return ( 
        <h1 className={classes.Logo}>
           <Link to="/">Pharmashop</Link>
         </h1>
     );
}
 
export default Logo;