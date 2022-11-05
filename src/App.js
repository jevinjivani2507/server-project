import React, { useState, useEffect } from "react";
import "./App.css";
import { Input, Button } from "@nextui-org/react";
import { Product } from "./components";


function App() {
  return (
    <div className="app">
      <div className="blob1"></div>
      <div className="blob2"></div>
      <div className="main-box space-y-4">
        <div className="flex justify-center pt-4 space-x-5">
          <Input placeholder="Search" />
          <Button auto className="!bg-secondary">Search</Button>
        </div>
        <hr className="horizontal-bar" />
        <div className="space-y-4 h-[34.5rem] overflow-scroll overflow-x-hidden scrollbar-hide">
          <Product 
            airport_id="Field-1"
            iata_code="Field-2"
            icao_code="Field-3"
            airport_name="Field-4"
            country_name="Field-5"
          />
          <Product 
            airport_id="Field-1"
            iata_code="Field-2"
            icao_code="Field-3"
            airport_name="Field-4"
            country_name="Field-5"
          />
          <Product 
            airport_id="Field-1"
            iata_code="Field-2"
            icao_code="Field-3"
            airport_name="Field-4"
            country_name="Field-5"
          />
          <Product 
            airport_id="Field-1"
            iata_code="Field-2"
            icao_code="Field-3"
            airport_name="Field-4"
            country_name="Field-5"
          />
          <Product 
            airport_id="Field-1"
            iata_code="Field-2"
            icao_code="Field-3"
            airport_name="Field-4"
            country_name="Field-5"
          />
          <Product 
            airport_id="Field-1"
            iata_code="Field-2"
            icao_code="Field-3"
            airport_name="Field-4"
            country_name="Field-5"
          />
          <Product 
            airport_id="Field-1"
            iata_code="Field-2"
            icao_code="Field-3"
            airport_name="Field-4"
            country_name="Field-5"
          />
          <Product 
            airport_id="Field-1"
            iata_code="Field-2"
            icao_code="Field-3"
            airport_name="Field-4"
            country_name="Field-5"
          />
          <Product 
            airport_id="Field-1"
            iata_code="Field-2"
            icao_code="Field-3"
            airport_name="Field-4"
            country_name="Field-5"
          />
          <Product 
            airport_id="Field-1"
            iata_code="Field-2"
            icao_code="Field-3"
            airport_name="Field-4"
            country_name="Field-5"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
