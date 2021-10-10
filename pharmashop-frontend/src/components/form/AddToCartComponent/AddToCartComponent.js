import { useContext } from "react";
import { PharmaContext } from "../../../PharmaContext";
import classes from "./AddToCartComponent.module.scss";
const AddToCartComponent = ({ id,label }) => {
  const [currentUser, setCurrentUser] = useContext(PharmaContext);
  let user_id;
  if(currentUser){
    user_id= currentUser.id;
  }

  
  

  const product_id = id;
  const addToCart = async (e) => {
    e.preventDefault();
    const boughtProduct = { user_id, product_id };
    const data = await fetch("http://localhost:8000/api/products", {
      method: "POST",
      body: JSON.stringify(boughtProduct),
      headers: {
        "Content-Type": "application/json",
        Acept: "application/json",
      },
    });
   

  };
 
   
  
  

  return (
    <form className={classes.Add} onSubmit={addToCart}>
      {currentUser ? (
        <div>
          <button type="submit" className={classes.enabled}>{label}</button>
        </div>
      ) : (
        <>
          <button disabled className={classes.disabled} >{label}</button>
          
        </>
      )}
    </form>
  );
};

export default AddToCartComponent;
