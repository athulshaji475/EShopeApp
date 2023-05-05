import React from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Css/card.css';
import Billingform from './Billingform';

function Cards({ dataset }) {
  
  console.log(dataset)
  return (
    <div>
      <CardGroup style={{ width: 'auto' }}>
        <Card className={'card-grid'}>
          <Card.Img
            className={'card-img'}
            variant='bottom'
            src={'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcR61F36y-FxJ1SuhuKrBUmJeQtWyklBOtf_QcqLNnziuboOyVCBPXjSiJsNqIQ_AIvd'}
          />
          <Card.Body>
            <Card.Title>
              <strong>{dataset.name}</strong>
            </Card.Title>
            <Card.Text>
              {dataset.price}
              <br />
              {dataset.catogory}
            </Card.Text>
            <Link to= '/Billing'>
              <Button variant='primary'>Buy Now</Button>
            </Link>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Cards;
