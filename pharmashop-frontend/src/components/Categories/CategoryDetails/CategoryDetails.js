import { Container, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../../Card/Card";
import Loader from "../../ui/svg/Loader/Loader";
import classess from "./CategoryDetails.module.scss";



const CategoryDetails = () => {
  const [details, setDetails] = useState([]);
  const [products, setProducts] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const id = useParams().id;
  const [sortType, setSortType] = useState("desc");

  useEffect(() => {
    async function fetchDetails() {
      const data = await fetch(`http://localhost:8000/api/categories/${id}`);
      const res = await data.json();
      setDetails(res[0]);
      setProducts(res[1]);
      setIsPending(false);
    }
    fetchDetails();
  }, [id]);
  products.sort((a, b) => {
    if (sortType === "asc") {
      return +a.price - +b.price;
    } else if (sortType === "desc") {
      return +b.price - +a.price;
    }
  });
  return (
    <Container>
      {isPending && <Loader />}
      <div className={classess.Description}>
        <h1>{details.name}</h1>
        <Typography>{details.description}</Typography>
      </div>

      <div className={classess.ProductsContainer}>
        <div className={classess.Sort}>
          <h1>Products</h1>
          <select
            onChange={(e) => setSortType(e.target.value)}
            value={sortType}
          >
            <option value="desc">desc</option>
            <option value="asc">asc</option>
          </select>
        </div>

        <div className={classess.Products}>
          {products.map((product) => {
            return (
              <Card
                key={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                id={product.id}
                label="Add to Cart"
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default CategoryDetails;
