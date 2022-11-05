import React, { useState, useEffect } from "react";
import { Card, Button, Modal } from "@nextui-org/react";
import UpdateModel from "./UpdateModel";
import DeleteModel from "./DeleteModel";

const Product = (props) => {
  const [updateModel, setUpdateModel] = useState(false);
  const [deleteModel, setDeleteModel] = useState(false);
  return (
    <div className="px-10">
      <Card CardVariants="shadow" className="!w-full !h-20 !border-0">
        <div className="flex justify-between p-10 w-full h-full">
          <div className="flex items-center space-x-5 ">
            <h3 className="m-0">{props.airport_id}</h3>
            <h5 className="m-0">{props.iata_code}</h5>
            <h5 className="m-0">{props.icao_code}</h5>
            <h5 className="m-0">{props.airport_name}</h5>
            <h5 className="m-0">{props.country_name}</h5>
          </div>
          <div className="flex items-center space-x-5">
            <Button
              auto
              color="warning"
              className="!bg-secondary"
              onClick={() => setUpdateModel(true)}
            >
              Update
            </Button>
            <Button
              auto
              color="warning"
              className="!bg-secondary"
              onClick={() => setDeleteModel(true)}
            >
              Delete
            </Button>
            <Modal
              closeButton
              open={updateModel}
              onClose={() => setUpdateModel(false)}
            >
              <Modal.Body>
                <UpdateModel />
              </Modal.Body>
            </Modal>
            <Modal
              closeButton
              open={deleteModel}
              onClose={() => setDeleteModel(false)}
            >
              <Modal.Body>
                <DeleteModel />
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Product;
