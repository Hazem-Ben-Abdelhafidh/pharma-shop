import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../Card/Card";
import classes from "./Category.module.scss";
const Category = ({ name, image, id }) => {
  const [products,setProducts]= useState([]);


  useEffect(()=>{
    async function fetchDetails() {
      const data = await fetch(`http://localhost:8000/api/categories/${id}`);
      const res = await data.json();
      setProducts(res[1]);
      
    }
    fetchDetails();
  },[]);
  return (
    < div className={classes.container}>
        <div className={classes.name}>
           <h1>{name}</h1>
        </div>
        <div className={classes.Category}>
            <img src={image} alt={name} className={classes.CategoryImage} />
            <div className={classes.productsContainer}>
                {products.map((product,index)=>{
                  if(index <= 2){
                    return <Card
                    key={product.id}
                    name={product.name}
                    image={product.image}
                    price={product.price}
                    id={product.id}
                    label="Add to Cart"
                    />
                  }
                })}
            </div>
            
        </div>

        <div className={classes.link}>
        <Link to={`categories/${id}`} className={classes.Link}>See all products</Link>
        </div>
    </div>
  );
};

export default Category;
