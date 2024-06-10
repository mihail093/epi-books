import React from 'react';
import { ListGroup } from 'react-bootstrap';
import SingleComment from './SingleComment';

export default function CommentList({ asin, comments, add, setAdd }) {

  return (
  <ListGroup>
    {comments.map(comment => <SingleComment asin={asin} comment={comment} add={add} setAdd={setAdd} />)}
  </ListGroup>
  )
}
