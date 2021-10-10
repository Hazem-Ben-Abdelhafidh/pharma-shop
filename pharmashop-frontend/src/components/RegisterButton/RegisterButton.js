import { Link } from "react-router-dom";
import classes from "./RegisterButton.module.scss";
const RegisterButton = () => {
    return ( 
        <button  className={classes.register}><Link to="/login">Sign in</Link></button>
     );
}
 
export default RegisterButton;