import { useEffect, useState } from "react";

import "./styles.css";

import ProductsList from "./productsList";
import StepsHeader from "./stepsHeader";
import { OrderLocationData, Product } from "./types";
import { fetchProducts } from "../../services/api";
import OrderLocation from "./orderLocation";

const Orders = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

  useEffect(() => {
    fetchProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductsList products={products} />
      <OrderLocation
        onChangeLocation={(location) => setOrderLocation(location)}
      />
    </div>
  );
};

export default Orders;
