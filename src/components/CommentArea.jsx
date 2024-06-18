import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import CommentList from './CommentList';
import AddComment from './AddComment';
import { Alert } from 'react-bootstrap';

const URLCommentsAPI = 'https://striveschool-api.herokuapp.com/api/books/';
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMWJmOTBiM2IyNTAwMTUxYjU0MmIiLCJpYXQiOjE3MTczMjI2MzksImV4cCI6MTcxODUzMjIzOX0.ymxAn98WlOY6Hfck11psrVYTMOvAexs5TLFBa5YRy8k';

export default function CommentArea({ asin }) {

    const [comments, setComments] = useState([]);
    const [spinner, setSpinner] = useState(false);
    const [alertError, setAlertError] = useState(false);
    const [add, setAdd] = useState(false)

    useEffect(() => {
      setSpinner(true);
      fetch(URLCommentsAPI + asin + "/comments/", {
          headers: {Authorization: token}
      })
      .then(response => response.json())
      .then(data => {
        setSpinner(false);
        setComments(data)
      })
      .catch(err => {
        setSpinner(false);
        setAlertError(true)
      })
    }, [add, asin])

  return (
    <div className='my-3'>
        <h3>Comment Area:</h3>
        {spinner && <Spinner animation="border" variant="warning" />}
        {alertError && <Alert variant='danger'>Loading error</Alert>}
        <CommentList asin={asin} comments={comments} add={add} setAdd={setAdd} />
        <AddComment asin={asin} add={add} setAdd={setAdd} />
    </div>
  )
}
