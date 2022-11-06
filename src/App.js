import React, { useState, useEffect, useContext, createContext } from "react";
import "./App.css";
import { Input, Button } from "@nextui-org/react";
import Product from "./components/product1/Product";
import Product2 from "./components/product2/Product2";
import data1 from "./resources/data1";
import data2 from "./resources/data2";

function App() {
  const [products, setProducts] = useState(data1);
  const [search, setSearch] = useState("");
  const [search2, setSearch2] = useState("");

  const [currentData, setCurrentData] = useState("data1");

  useEffect(() => {
    if (currentData === "data1") {
      setProducts(data1);
      setSearch2("");
    } else {
      setProducts(data2);
      setSearch("");
    }
  }, [currentData]);

  useEffect(() => {
    console.log(currentData);
  }, [currentData]);

  const handleSearch = (e) => {
    if (currentData === "data1") {
      setSearch(e);
    } else {
      setSearch2(e);
    }
  };

  const clickSearch = () => {
    console.log(search);
    console.log(search2);
  };

  return (
    <div className="app">
      <div className="blob1"></div>
      <div className="blob2"></div>
      <div className="main-box space-y-4 max-h-screen">
        <div className="flex justify-center pt-4 space-x-5">
          <Input
            aria-label="Search-input"
            placeholder="Search"
            value={currentData === "data1" ? search : search2}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
          <Button
            aria-label="Search"
            auto
            className="!bg-secondary"
            onPress={() => {
              clickSearch();
            }}
          >
            Search
          </Button>
        </div>
        <hr className="horizontal-bar" />
        <div className="flex justify-center">
          <Button.Group size="sm">
            <Button
              aria-label="Data1"
              className="!bg-secondary"
              onPress={() => setCurrentData("data1")}
            >
              Data1
            </Button>
            <Button
              aria-label="Data2"
              className="!bg-secondary"
              onPress={() => setCurrentData("data2")}
            >
              Data2
            </Button>
          </Button.Group>
        </div>
        <div className="space-y-4 h-[30rem] overflow-scroll overflow-x-hidden scrollbar-hide">
          {currentData === "data1"
            ? data1.map((item) => (
                <Product
                  key={item.airport_id}
                  airport_id={item.airport_id}
                  iata_code={item.iata_code}
                  icao_code={item.icao_code}
                  airport_name={item.airport_name}
                  country_name={item.country_name}
                />
              ))
            : data2.map((item) => (
                <Product2
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
