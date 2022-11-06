import React from "react";
import { Button } from "@nextui-org/react";

const DeleteModel = (props) => {

  const deleteData = () => {
    console.log("Delete Data :: "+props.airport_id);
    console.log("Delete Data Api Call");

  }

  return (
    <div className="pb-3">
      <h3 className="flex justify-center">Delete</h3>
      <hr />
      <div className="mt-2">
        Are you sure you want to delete this record? This action cannot be
        undone.
      </div>
      <div className="flex justify-center">
        <Button
          className="!bg-secondary !mt-4"
          onPress={() => deleteData()}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default DeleteModel;
