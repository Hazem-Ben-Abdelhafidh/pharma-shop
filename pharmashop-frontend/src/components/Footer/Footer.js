import Logo from "../Logo/Logo";
import classes from "./Footer.module.scss";
const Footer = () => {
    return ( 
        <footer className={classes.Footer}>
            <div>
                <Logo/>
                <p>&copy; All rights reserved</p>
            </div>
            
            <h3>Designed By Hazem</h3>
        </footer>
     );
}
 
export default Footer;