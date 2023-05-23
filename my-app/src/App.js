import React, { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./ProductList";

function App() {
  const [data, setData] = useState();
  const username = "user@example.com";
  const password = "password1234";

  const base64 = btoa(`${username}:${password}`);

  useEffect(() => {
    const access = async () => {
      try {
        const response = await fetch("http://localhost:3000/cart-items", {
          headers: {
            Authorization: `Basic ${base64}`,
          },
        });

        const result = await response.text();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    access();

    console.log(data);
  }, [base64]);

  return <div className="App">{data && <ProductList data={data} />}</div>;
}

export default App;
