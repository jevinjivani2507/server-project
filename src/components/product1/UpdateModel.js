import React from "react";
import { Input, Button } from "@nextui-org/react";
import { useEffect } from "react";

const UpdateModel = (props) => {

  const [airport_id, setAirport_id] = React.useState(props.airport_id);
  const [iata_code, setIata_code] = React.useState(props.iata_code);
  const [icao_code, setIcao_code] = React.useState(props.icao_code);
  const [airport_name, setAirport_name] = React.useState(props.airport_name);
  const [country_name, setCountry_name] = React.useState(props.country_name);

  let updatedData = {
    airport_id: airport_id,
    iata_code: iata_code,
    icao_code: icao_code,
    airport_name: airport_name,
    country_name: country_name,
  };

  const updateData = () => {
    console.log(updatedData);
    console.log("Update Data Api Call");
  };

  useEffect(() => {
    // console.log(updatedData);
  }, [updatedData]);

  return (
    <div className="flex justify-center flex-col px-10 pb-5 space-y-4">
      <h3 className="flex justify-center mb-0">Update</h3>
      <hr />
      <Input
        aria-label="airport_id"
        initialValue={airport_id}
        placeholder="airport_id"
        bordered
        onChange={(e) => {
          // console.log(e.target.value);
          setAirport_id(e.target.value);
        }}
      />
      <Input
        aria-label="iata_code"
        initialValue={iata_code}
        placeholder="iata_code"
        bordered
        onChange={(e) => {
          // console.log(e.target.value);
          setIata_code(e.target.value);
        }}
      />
      <Input
        aria-label="icao_code"
        initialValue={icao_code}
        placeholder="icao_code"
        bordered
        onChange={(e) => {
          // console.log(e.target.value);
          setIcao_code(e.target.value);
        }}
      />
      <Input
        aria-label="airport_name"
        initialValue={airport_name}
        placeholder="airport_name"
        bordered
        onChange={(e) => {
          // console.log(e.target.value);
          setAirport_name(e.target.value);
        }}
      />
      <Input
        aria-label="country_name"
        initialValue={country_name}
        placeholder="country_name"
        bordered
        onChange={(e) => {
          // console.log(e.target.value);
          setCountry_name(e.target.value);
        }}
      />
      <div className="flex justify-center">
        <Button
          className="!bg-secondary !mt-5"
          onPress={() => updateData()}
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default UpdateModel;
