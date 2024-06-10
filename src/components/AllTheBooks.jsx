import React, { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SingleBook from './SingleBook';
import CommentArea from './CommentArea';

export default function AllTheBooks(props) {

  const [selected, setSelected] = useState(false);

  return (
    <Container>
      <Row>
        <Col md={9}>
          <Row>
            {props.books
            .filter(book => book.title.toLowerCase().includes(props.search))
            .map(book => (
                <SingleBook key={book.asin} book={book} selected={selected} setSelected={setSelected}/>
            ))}
          </Row>
        </Col>
        <Col md={3}>
          <CommentArea asin={selected}/>
        </Col>
      </Row>
    </Container>
  )
}
