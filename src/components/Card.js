import React from 'react'
import {Card, CardGroup, Button} from "react-bootstrap";
import '../Css/card.css';
function Card() {
  return (
    <div>
       <CardGroup>
           
                    <Card className={"card-grid"} key={index}>
                        <Card.Img className={"card-img"} variant="bottom" src={"https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"}/>
                        <Card.Body>
                            <Card.Title><strong>{'name'}</strong></Card.Title>
                            <Card.Text>
                                <p>
                                    {'body'}
                                </p>
                            </Card.Text>
                            <Button variant="primary"
                                    href="www.google.com"
                                    rel={"noopener noreferrer"}>
                                Learn More
                            </Button>
                        </Card.Body>
                    </Card>
            
        </CardGroup>
    </div>
  )
}

export default Card
