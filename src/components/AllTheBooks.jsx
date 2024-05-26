import React from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import './AllTheBooks.css';

export default function AllTheBooks(props) {
  return (
    <Container>
        <Row>
            {props.books.map(book => (
                <Col>
                    <Card className='my-3 myCard'>
                        <Card.Img className='myImage' variant="top" src={book.img} />
                        <Card.Body className='myCardBody'>
                            <Card.Title className='myTitle'>{book.title}</Card.Title>
                            <Button variant="success">{book.price} €</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
  )
}
