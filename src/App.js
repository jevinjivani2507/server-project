import React, { useState, useEffect, useContext, createContext } from "react";
import "./App.css";
import { Input, Button } from "@nextui-org/react";
import { Product } from "./components";
import data1 from "./resources/data1";
import data2 from "./resources/data2";

function App() {
  const [products, setProducts] = useState(data1);
  const [search, setSearch] = useState("");

  return (
    <div className="app">
      <div className="blob1"></div>
      <div className="blob2"></div>
      <div className="main-box space-y-4 max-h-screen">
        <div className="flex justify-center pt-4 space-x-5">
          <Input
            aria-label="Search-input"
            placeholder="Search"
            onChange={(e) => {
              console.log(e.target.value);
              setSearch(e.target.value);
            }}
          />
          <Button aria-label="Search" auto className="!bg-secondary">
            Search
          </Button>
        </div>
        <hr className="horizontal-bar" />
        <div className="flex justify-center">
          <Button.Group size="sm">
            <Button
              aria-label="Data1"
              className="!bg-secondary"
              onPress={() => setProducts(data1)}
            >
              Data1
            </Button>
            <Button
              aria-label="Data2"
              className="!bg-secondary"
              onPress={() => setProducts(data2)}
            >
              Data2
            </Button>
          </Button.Group>
        </div>
        <div className="space-y-4 h-[30rem] overflow-scroll overflow-x-hidden scrollbar-hide">
          {products.map((item) => (
            <Product
              key={item.airport_id}
              airport_id={item.airport_id}
              iata_code={item.iata_code}
              icao_code={item.icao_code}
              airport_name={item.airport_name}
              country_name={item.country_name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
