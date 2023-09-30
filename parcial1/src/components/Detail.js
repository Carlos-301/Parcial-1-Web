import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";



function Detail() {
  const params = useParams();
  const [part, setPart] = useState({
    carModel: "defaultModel",
    image: "defaultImg",
    partName: "defaultPart",
    carMaker: "defaultMaker",
    price: "defaultPrice",
    carYear: "defaultYear",
    available: "available",
    description: "defaultDescription",
  });

    useEffect(() => {
      let URL =
        "https://raw.githubusercontent.com/Carlos-301/Parcial-1-Web/main/datos.json";
      fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          for (let i = 0; i < data.length; i++) {
            const element = data[i];
            console.log(element);
            if (element["partName"] === params.partName) {
              setPart(element);
              break;
            }
          }
        });
    }, []);

      return (
        <div>
      <Container className="mt-5">
        <Row className="mb-1">
          <Col style={{ width: "600px" }}>
            <img src={part.image} style={{ width: "600px", height: "400px" }} />
          </Col>
          <Col className="ml-5">
            <h1>{part.partName}</h1>
            <hr style={{ color: "black" }}></hr>
            <span className="colorRed">Car Maker: </span>{" "}
            <span>{part.carMaker}</span>
            <br />
            <span className="colorRed">Car Year: </span>{" "}
            <span>{part.carYear}</span>
            <br />
            <span className="colorRed">Car Model: </span>{" "}
            <span>{part.carModel}</span>
            <br />
            <span className="colorRed">Available Online: </span>{" "}
            <span>{part.available ? "Yes" : "No"}</span>
            <br />
            <span className="colorRed">Price: </span> <span>{part.price}</span>
            <br />
            <span className="colorRed">Description: </span>
            <br></br>
            { part.description!="defaultDescription" &&
            (<input defaultValue={part.description}></input>)}
            {  <p> {part.description}</p>}
          </Col>
        </Row>
      </Container>
    </div>
      )
}


export default Detail;