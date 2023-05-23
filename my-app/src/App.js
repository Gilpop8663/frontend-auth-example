import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();
  const username = "user@example.com";
  const password = "password1234";

  const base64 = btoa(`${username}:${password}`);

  useEffect(() => {
    const access = async () => {
      try {
        const response = await fetch("http://localhost:3000", {
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
  }, [base64]);

  return (
    <div className="App">
      <span>{data}</span>
    </div>
  );
}

export default App;
