import { Container } from "@material-ui/core";
import { useEffect } from "react";
import {  useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Card from "../Card/Card";
import classes from "./CartDetails.module.scss";

const CartDetails = () => {
    const [products,setProducts]= useState([]);
    const userId= useParams().id;
    const userName= useParams().name;
    const history= useHistory();
    useEffect(()=>{
        async function fetchProducts(){
            const data= await fetch(`http://localhost:8000/api/cart/${userId}`);
            const result= await data.json();
            setProducts(result);
        }
        fetchProducts();
    },[]);
    

    useEffect(()=>{
        if(!localStorage.getItem("user-info")){
            history.push('/login');
        }
    },[]);

    return ( 
        <>
            <Container>
                <h1>{userName}'s Cart:</h1>

            </Container>
            <div className={classes.Cart}>
            {products.length && products.map((product,index)=>
                (
                    <Card key={index} name={product.name} image={product.image} price={product.price} id={product.id} label="Buy Now!"/>
                )
            )}
            </div>
        </>
     );
}
 
export default CartDetails;