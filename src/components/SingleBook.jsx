import React, { useContext } from 'react'
import {Col, Card, Button} from 'react-bootstrap';
import './SingleBook.css';
import CommentArea from './CommentArea';
import { ThemeContext } from '../mudules/Contexts';

export default function SingleBook({ book, selected, setSelected }) {

    let [themeCtx] = useContext(ThemeContext);

  return (
    <>
      <Col>
          <Card 
            bg={themeCtx} 
            data-bs-theme={themeCtx} 
            className='my-3 myCard text-center' 
            style={{border: selected === book.asin ? '3px solid red' : 'none'}} 
            onClick={() => {if(selected === book.asin) {setSelected(false)} else{setSelected(book.asin)}}}
          >
              <Card.Img className='myImage' variant="top" src={book.img} />
              <Card.Body className='myCardBody'>
                  <Card.Title className='myTitle'>{book.title}</Card.Title>
                  <Button variant="outline-success">{book.price} €</Button>
              </Card.Body>
          </Card>
      </Col>
    </>
  )
}
