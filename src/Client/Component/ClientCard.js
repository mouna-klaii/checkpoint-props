import React from "react";
import { Button, Card } from "react-bootstrap";

const ClientCard = (props) => {
    const handleName = (name) => alert(`Vous êtes : ${props.name} la bienvenue`)
  return (
    <div> <Card className="bg-dark" style={{ width: "18rem" , color:"black"  }}>
    {props.children}
<Card.Body>
  <Card.Title >{props.name}</Card.Title>
  <Card.Text>{props.profe}</Card.Text>
  <Card.Text>{props.bio}</Card.Text>
  <Button variant="danger" onClick={handleName}>Je suis !!</Button>
</Card.Body>
</Card></div>
  )
}

export default ClientCard