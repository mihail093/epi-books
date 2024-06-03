import React, { useState } from 'react';
import {Form, InputGroup, Button} from 'react-bootstrap';
import RangeReview from './RangeReview';

const URLCommentPostAPI = 'https://striveschool-api.herokuapp.com/api/comments';
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMWJmOTBiM2IyNTAwMTUxYjU0MmIiLCJpYXQiOjE3MTczMjI2MzksImV4cCI6MTcxODUzMjIzOX0.ymxAn98WlOY6Hfck11psrVYTMOvAexs5TLFBa5YRy8k';


export default function AddComment({ asin }) {
  const [textComment, setTextComment] = useState('');
  const [reviewValue, setReviewValue] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Comment:', textComment);
    console.log('Rating:', reviewValue);

    fetch(URLCommentPostAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify({
        comment: textComment,
        rate: reviewValue,
        elementId: asin
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });

    setTextComment('');
    setReviewValue(1)
  };

  return (
    <div className='mt-3'>
      <h5>Leave a comment</h5>
      <InputGroup as="form" onSubmit={handleSubmit}>
        <InputGroup.Text>Add a comment</InputGroup.Text>
        <Form.Control
          as="textarea"
          aria-label="With textarea"
          value={textComment}
          onChange={(e) => setTextComment(e.target.value)}
        />
        <RangeReview reviewValue={reviewValue} setReviewValue={setReviewValue} />
        <div className='w-100 d-flex justify-content-end'>
          <Button variant="outline-primary" type="submit">Submit</Button>
        </div>
      </InputGroup>
    </div>
  );
}
