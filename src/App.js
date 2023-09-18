import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header.jsx";
import axios from "axios";
import { SingleProduct } from "./components/SingleProduct.jsx";

function App() {
  const [productDetails, setProductDetails] = useState(null);
  const categories = productDetails?.map(item => item.category)

  const category = new Set(categories)

  console.log(productDetails);
  useEffect(() => {
    async function fetchDetails() {
      return await axios.get("https://dummyjson.com/products");
    }
    fetchDetails().then((res) => setProductDetails(res.data.products));
  }, []);

  const productListing = productDetails?.map((item) => (
    <SingleProduct product={item} />
  ));

  
  return (
    <div className="App">
      <Header category ={category}/>
      <div id="productContainer">{productListing}</div>
    </div>
  );
}

export default App;
