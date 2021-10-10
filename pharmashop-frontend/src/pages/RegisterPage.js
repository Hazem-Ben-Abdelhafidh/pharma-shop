import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import RegisterFormComponent from "../components/form/RegisterFormComponent"

const RegisterPage = () => {
  const history= useHistory();
  useEffect(()=>{
      if(localStorage.getItem('user-info')){
          history.push('/');
      }
  },[]);
  return ( 
    <main>

      <RegisterFormComponent/>
    </main>
   );
}
 
export default RegisterPage;