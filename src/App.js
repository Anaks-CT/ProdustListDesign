import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header.jsx";
import axios from "axios";
import { SingleProduct } from "./components/SingleProduct.jsx";

function App() {
  const [productDetails, setProductDetails] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = productDetails?.map((item) => item.category);

  const category = new Set(categories);

  console.log(productDetails);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProductDetails(res.data.products));
  }, []);

  const filteredProducts = productDetails?.filter((item) => {
    const includesSearchInput = item.title
      .toLowerCase()
      .includes(searchInput.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    return includesSearchInput && matchesCategory;
  });

  const productListing = filteredProducts?.map((item) => (
    <SingleProduct product={item} />
  ));
  return (
    <div className="App">
      <Header
        category={category}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div id="product-container">
        {productListing}{" "}
        <span id="noItems-text">
          {!productListing?.length && "No items Available"}
        </span>
      </div>
    </div>
  );
}

export default App;
