import React, { useState } from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap';
import SingleBook from './SingleBook';

export default function AllTheBooks(props) {

  const [search, setSearch] = useState('');

  return (
    <Container>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Control type="search" placeholder="Find your book. . ." value={search} onChange={(e) => setSearch(e.target.value)}/>
          </Form.Group>
        </Col>
      </Row>
      <Row>
          {props.books
          .filter(book => book.title.toLowerCase().includes(search))
          .map(book => (
              <SingleBook key={book.asin} book={book} />
          ))}
      </Row>
    </Container>
  )
}
