import React, { useEffect, useState} from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { ErrorMessage, AlertDismissible } from './MessageAlert';

const URLDeleteEditComment = 'https://striveschool-api.herokuapp.com/api/comments/';
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMWJmOTBiM2IyNTAwMTUxYjU0MmIiLCJpYXQiOjE3MTczMjI2MzksImV4cCI6MTcxODUzMjIzOX0.ymxAn98WlOY6Hfck11psrVYTMOvAexs5TLFBa5YRy8k';
const star = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#EDBB54" className="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg>
);

export default function SingleComment({ comment, add, setAdd }) {

  const [textComment, setTextComment] = useState(comment.comment);
  const [reviewValue, setReviewValue] = useState(comment.rate);
  const [showErrorDelete, setShowErrorDelete] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [showErrorPut, setShowErrorPut] = useState(false);
  const [putSuccess, setPutSuccess] = useState(false);
  const [editClicked, setEditClicked] = useState(false);

  const deleteFunc = () => {
    fetch(URLDeleteEditComment + comment._id, {
      method: 'DELETE',
      headers: {
        Authorization: token
      }
    })
    .then(response => {
      if (!response.ok) {
        setShowErrorDelete(true)
      } else {
        setDeleteSuccess(true);
        setTimeout(() => {
          setAdd(!add);
        }, 3000)
      }
    })
  }

  const editFunc = () => {
    let editComment = prompt('Edit the comment', textComment);
    let editRate = prompt('Edit the rating', reviewValue);
    setTextComment(editComment);
    while (editRate < 1 || editRate > 5) {
      alert("The rating can be a number from 1 to 5!");
      editRate = prompt('Edit the rating', reviewValue);
    }
    setReviewValue(editRate);
    setEditClicked(true)
  }

  useEffect(() => {
    if (editClicked) {
      fetch(URLDeleteEditComment + comment._id, {
        method: 'PUT',
        headers:{
          'Content-Type': 'application/json',
          Authorization: token
        },
        body: JSON.stringify({
          comment: textComment,
          rate: reviewValue
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPutSuccess(true);
        setAdd(!add);
        setEditClicked(false);
      })
      .catch(err => {
        console.error(err);
        setShowErrorPut(true);
        setEditClicked(false);
      })
    }
  }, [reviewValue, textComment])

  return (
    <>
      <ListGroup.Item>
        <p>
          {comment.comment}
          <span className='float-end'>
            {Array.from({ length: comment.rate }, (_, index) => (
            <span key={index}>{star}</span>
          ))}
          </span> 
        </p>
        <Button className='float-start mt-3 mx-1' variant="danger" size='sm' onClick={deleteFunc}>Delete</Button>
        <Button className='float-start mt-3 mx-1' variant="dark" size='sm' onClick={editFunc}>Edit</Button>
      </ListGroup.Item>
      <div>
        {showErrorDelete && <ErrorMessage message="The comment was not deleted due to an error" />}
        {deleteSuccess && <AlertDismissible message="Comment deleted" />}
        {showErrorPut && <ErrorMessage message="The change did not occur due to an error" />}
        {putSuccess && <AlertDismissible message="Comment edited" />}
      </div>
    </>
  )
}
