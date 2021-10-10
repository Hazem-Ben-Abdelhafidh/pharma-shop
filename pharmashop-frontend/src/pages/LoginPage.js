import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import LoginFormComponent from "../components/form/LoginFormComponent"

const LoginPage = () => {
    const history= useHistory();
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            history.push('/');
        }
    },[]);
    return ( 
       <main>
           <LoginFormComponent/>
       </main>
     );
}
 
export default LoginPage;