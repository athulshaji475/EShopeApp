import React from 'react'
import {Card, CardGroup, Button} from "react-bootstrap";
import '../Css/card.css';

function Cards() {
  return (
    <div>
       <CardGroup style={{width:'auto'}}>
           
                    <Card className={"card-grid"}>
                        <Card.Img className={"card-img"}  variant="bottom" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUO7WZsrUlz6XT-6-e07YnghUoF6r-9w_0tQ&usqp=CAU"}/>
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

export default Cards
