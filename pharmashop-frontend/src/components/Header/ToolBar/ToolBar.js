import classes from "./ToolBar.module.scss";
import { FaBars,FaTimes,FaShoppingCart } from "react-icons/fa";
import RegisterButton from "../../RegisterButton/RegisterButton";
import NavLinks from "../NavLinks/NavLinks";
import { useContext } from "react";
import { PharmaContext } from "../../../PharmaContext";
import Logo from "../../Logo/Logo";
import useLogout from "../../../CustomHooks/useLogout";
import { Link } from "react-router-dom";



const ToolBar = ({ showDrop,show}) => {
  const [currentUser, setCurrentUser] = useContext(PharmaContext);
  const logout= useLogout();
  console.log(currentUser);

  return (
    <>
      <div className={classes.NavigationBar}>
        <Logo />
        <NavLinks logout={logout} />
        {currentUser ? (<>
          <h5>Welcome {currentUser.name} !</h5>
          <Link to={`/${currentUser.name}/${currentUser.id}`}><FaShoppingCart className={classes.Cart}/></Link>
          </>
        ) : (
          <RegisterButton/>
        )}
        {show? <FaBars className={classes.Burger} onClick={showDrop}  />: <FaTimes className={classes.Burger} onClick={showDrop} />}
      </div>
    </>
  );
};

export default ToolBar;
