import React, { useState, useEffect, useContext } from "react";
import { Card, Button, Modal } from "@nextui-org/react";
import UpdateModel2 from "./UpdateModel2";
import DeleteModel2 from "./DeleteModel2";


const Product2 = (props) => {
  const [updateModel, setUpdateModel] = useState(false);
  const [deleteModel, setDeleteModel] = useState(false);

  return (
    <div className="px-10">
      <Card className="!w-full !h-20 !border-0">
        <div className="flex justify-between p-10 w-full h-full">
          <div className="flex items-center space-x-5 ">
            <h3 className="m-0 tracking-wide">{props.airport_name}</h3>
            <h5 className="m-0">{props.airport_id}</h5>
            <h5 className="m-0">{props.iata_code}</h5>
            <h5 className="m-0">{props.icao_code}</h5>
            <h5 className="m-0">{props.country_name}</h5>
          </div>
          <div className="flex items-center space-x-5">
            <Button
              auto
              aria-label="Update"
              color="warning"
              className="!bg-secondary"
              onPress={() => setUpdateModel(true)}
            >
              Update
            </Button>
            <Button
              auto
              aria-label="delete"
              color="warning"
              className="!bg-secondary"
              onPress={() => setDeleteModel(true)}
            >
              Delete
            </Button>
            <Modal
              closeButton
              aria-label="Update"
              open={updateModel}
              onClose={() => setUpdateModel(false)}
            >
              <Modal.Body>
                <UpdateModel2
                  airport_id={props.airport_id}
                  iata_code={props.iata_code}
                  icao_code={props.icao_code}
                  airport_name={props.airport_name}
                  country_name={props.country_name}
                />
              </Modal.Body>
            </Modal>
            <Modal
              closeButton
              aria-label="Delete"
              open={deleteModel}
              onClose={() => setDeleteModel(false)}
            >
              <Modal.Body>
                <DeleteModel2 airport_id={props.airport_id} />
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Product2;
