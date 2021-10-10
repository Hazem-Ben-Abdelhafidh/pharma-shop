import AddToCartComponent from "../form/AddToCartComponent/AddToCartComponent";
import classes from "./Card.module.scss";
const Card = ({name,image,price,id,label}) => {
    return ( 
        <div className={classes.Card}>
                <div className={classes.img}>
                     <img src={image} alt={name} />
                     <h3>{name}</h3>
                </div>
                <span>Price: {price}</span>
                <AddToCartComponent id={id} label={label}/>
        </div>
     );
}
 
export default Card;