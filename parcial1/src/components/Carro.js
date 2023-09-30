import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Row , Col} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Carro(){

  const [info, setInfo] = useState([]);
  const [carro, setCarro] = useState('M3');
  const navigate = useNavigate();

  useEffect(() => {
    let URL =
      "https://raw.githubusercontent.com/Carlos-301/Parcial-1-Web/main/datos.json";
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setInfo(data);
      });
  }, []);

  const handleCardClick = (carro) => {
    setCarro(carro);
  };

  const rows = [];
  for (let i = 0; i < info.length; i += 3) {
    rows.push(info.slice(i, i + 3));
  }

  return(
    <div>
      <Container>
        <h2>Partes Encontradas</h2>
        {rows.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((part) => (
              <Col key={part.carModel} xs={12} sm={6} md={4}>
                <Card
                  className="mb-3 tarjeta"
                  onClick={() => handleCardClick(part.carModel)}>
                  <div>
                    <Card.Img src={part.image} alt={part.partName} />
                    <h2>{part.partName}</h2>
                    <h3>{part.carMaker}</h3>
                    <p>
                      {part.price} - {part.carYear}
                    </p>
                  </div>
                  <Link to={"/carro/detail/" + part.partName} >
                    Go to detail
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </div>
  );


    
}

export default Carro;