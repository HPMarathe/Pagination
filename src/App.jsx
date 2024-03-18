import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(3);
  const fetchProducts = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const json = await data.json();
    console.log(json);

    if (json && json.products) {
      setProducts(json.products);
    }
  };

  console.log(products);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="app">
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((product) => {
            return (
              <span className="products_single" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <span> {product.title}</span>
              </span>
            );
          })}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          {page}
          <span>◀️</span>
          <span> ▶️</span>
        </div>
      )}
    </div>
  );
}
export default App;
