import React from 'react';
import Fantasy from '../books/fantasy.json';
import History from '../books/history.json';
import Horror from '../books/horror.json';
import Romance from '../books/romance.json';
import Scifi from '../books/scifi.json';
import CommentArea from './CommentArea';
import { useParams } from 'react-router-dom'
import {Container, Row, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap';

export default function BookDetail() {

    const { asin } = useParams();
    const books = [...Fantasy, ...History, ...Horror, ...Romance, ...Scifi];
    const book = books.find(b => b.asin === asin);


  return (
    <Container>
        <Row>
        <Col md={8}>
            <Row>
                <Col md={5}>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src={book.img} />
                    </Card>
                </Col>
                <Col md={7}>
                    <h1>Book Details</h1>
                    <ListGroup>
                        <ListGroupItem>Title: {book.title}</ListGroupItem>
                        <ListGroupItem>Category: {book.category}</ListGroupItem>
                        <ListGroupItem>Price: {book.price} €</ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>
        </Col>
        <Col md={4}>
          <CommentArea asin={asin}/>
        </Col>
        </Row>
    </Container>
  )
}
