import { useEffect, useState } from 'react';
import './App.css';
import { getAllProducts } from './Services/Product.service';
import ProductCard from './Component/Product/ProductCard';

function App() {
  const [products, setProducts] = useState(null)
  useEffect(() => {
    (async () => {
      const productsResponse = await getAllProducts()
      console.log(productsResponse);
      setProducts(productsResponse)
    })()

  }, [])


  return (
    <div className="App">
      <h1>Product Listing</h1>
      {/* {
        products.map((product, idx) => {
          return <ProductCard {...product} />
        })
      } */}

    </div>
  );
}

export default App;
