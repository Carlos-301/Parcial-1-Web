import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Carro from "./Carro";


function Detail(){
    const [carro, setCarro] = useState([]);
    useEffect(() => {
        const URL =
          "https://raw.githubusercontent.com/Carlos-301/Parcial-1-Web/main/datos.json";
        fetch(URL)
          .then((data) => data.json())
          .then((data) => {
            setCarro(data);
          });
      }, []);

      return (
        <div className="container">
        <h2 className="mt-2">Listado de mascotas</h2>
        <hr></hr>
        <Row>
          {carro.map((carro) => (
            <Col key={carro.price}>
              <Carro mascota={carro} />
            </Col>
          ))}
        </Row>
      </div>
      )
}


export default Detail;