import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { PharmaContext } from "../PharmaContext";

const useLogout = () => {
    const [currentUser,setCurrentUser]= useContext(PharmaContext);
    const history= useHistory();

    return ()=>{
        localStorage.clear();
        setCurrentUser(null);
        history.push('/login');
    };
}
 
export default useLogout;