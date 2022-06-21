import { Card, Col, Container, Row, Button } from "react-bootstrap";
import React, { useEffect } from 'react'
import { useContext } from "react";
import { Context } from "../loja/context/ProdutoContext";
import { Link } from "react-router-dom";

export default function Produtos() {
  const { list, products} = useContext(Context)

  useEffect(() => {
    list();
  }, []);

  return (
    <Container>
      <h2>Produtos</h2>
      <Row>
        {products.map((product) => (     
        <Col md={3}>
          <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Subtitle>{product.price}</Card.Subtitle>
              <Card.Text>{product.description}</Card.Text>
              <Link to={`/produtos/${product.id}`}>
                <Button variant="primary" >Detalhes</Button>
              </Link>
              
            </Card.Body>
          </Card>
        </Col>   
        ))}
      </Row>
    </Container>
  );
}