import React, { useState } from 'react'
import {Col, Card, Button} from 'react-bootstrap';
import './SingleBook.css';
import CommentArea from './CommentArea';

export default function SingleBook({ book }) {

    const [selected, setSelected] = useState(false);

  return (
    <>
      <Col>
          <Card className='my-3 myCard' style={{border: selected ? '2px solid red' : 'none'}} onClick={() => setSelected(!selected)}>
              <Card.Img className='myImage' variant="top" src={book.img} />
              <Card.Body className='myCardBody'>
                  <Card.Title className='myTitle'>{book.title}</Card.Title>
                  <Button variant="outline-success">{book.price} €</Button>
              </Card.Body>
          </Card>
      </Col>
      {selected && <Col sm={12}><CommentArea asin={book.asin}/></Col>}
    </>
  )
}
