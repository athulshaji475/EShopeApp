import React from 'react'
import Navbr from '../components/Navbr'

import {Card, CardGroup, Button} from "react-bootstrap";
import '../Css/card.css';

function Homepage() {
  return (
    <>
      <Navbr/>
    
      <CardGroup>
            {Array.from({ length: 10 }).map((_, index) => (
                    <Card className={"card-grid"} key={index}>
                        <Card.Img className={"card-img"} variant="bottom" src={"https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"}/>
                        <Card.Body>
                            <Card.Title><strong>Lorem ipsum dolor sit amet</strong></Card.Title>
                            <Card.Text>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores harum, illum.
                                    Accusamus assumenda commodi consequuntur cumque, delectus deleniti dolorum eum illum
                                    nam nostrum provident quaerat quisquam quos reiciendis, reprehenderit voluptas!</p>
                            </Card.Text>
                            <Button variant="primary"
                                    href="www.google.com"
                                    rel={"noopener noreferrer"}>
                                Learn More
                            </Button>
                        </Card.Body>
                    </Card>
            ))}
        </CardGroup>
        </>
  )
}

export default Homepage
