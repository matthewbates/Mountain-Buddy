// *LOOK UP REACT CONTEXT

import React, { useState, useEffect } from "react";
import Packlist from "./Packlist";
import {
  Container,
  Col,
  Row,
  Button,
  Card,
  ListGroup,
  ListGroupItem,
  UnorderedListGroup,
} from "react-bootstrap";
import { MDBBtn } from "mdb-react-ui-kit";
import Checklist from "./Packlist";

function GearGarage({ currentUser, gearTypes, handleSelect }) {
  const [addToPacklist, setAddToPacklist] = useState([]);

  function handleAddToPacklist(event) {
    const pieceOfGear = event.target.id;
  }

  return (
    <Container className="gear-garage-background">
      <br />
      <h3 className="gear-garage-header">Gear Garage</h3>
      <br />
      <div className="container">
        <div className="image">
          <img src="https://www.rei.com/dam/winter_camping_checklist_hero_lg.jpg" />
        </div>
        <div classname="text">
          {" "}
          <br />
          <p>
            Whether you're setting out for a dayhike or a several day excursion,
            use this page to add the items you'll want to bring along with you
          </p>
          <p>
            If it's your first time in the elements, it might be best to borrow
            or rent some of these items. As you become a more experienced
            outdoorsman, you'll find that a lot of the fun is derived in
            figuring out what to bring along to meet your particular needs.
          </p>
          <p>
            Choose the items you'll need for your next outing below to add them
            to your packlist!
          </p>
        </div>
      </div>
      <div className="gear-garage-styling">
        {/* THIS CONTAINS ALL ELEMENTS */}
        <Row>
          {gearTypes.map((type) => {
            const list = type.gears.map((gear) => {
              return (
                <Container
                  className="gap-1 mb-0 mt-0"
                  key={gear.id}
                  id={gear.id}
                >
                  <ListGroup>{gear.name}</ListGroup>
                </Container>
              );
            });
            return (
              <div className="full-gear-garage col-lg-3" key={type.id}>
                <h5>
                  <br />
                  <u>{type.name}</u>
                </h5>
                {list.map((gearItem) => (
                  <div key={gearItem.id}>
                    <MDBBtn
                      rounded
                      outline
                      className="mx-6"
                      color="success"
                      horizontal
                      onClick={() =>
                        handleSelect((selectedGearTypes) => {
                          return [gearItem, ...selectedGearTypes];
                        })
                      }
                    >
                      {gearItem}
                    </MDBBtn>
                  </div>
                ))}
              </div>
            );
          })}
        </Row>
      </div>
    </Container>
  );
}

export default GearGarage;
