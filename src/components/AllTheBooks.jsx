import React, { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SingleBook from './SingleBook';

export default function AllTheBooks(props) {

  const [selected, setSelected] = useState(false);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <Row>
            {props.books
            .filter(book => book.title.toLowerCase().includes(props.search.toLowerCase()))
            .map(book => (
                <SingleBook key={book.asin} book={book} selected={selected} setSelected={setSelected} />
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
