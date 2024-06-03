import React, { useEffect, useState } from 'react'
import CommentList from './CommentList';
import AddComment from './AddComment';

const URLCommentsAPI = 'https://striveschool-api.herokuapp.com/api/books/';
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhMWJmOTBiM2IyNTAwMTUxYjU0MmIiLCJpYXQiOjE3MTczMjI2MzksImV4cCI6MTcxODUzMjIzOX0.ymxAn98WlOY6Hfck11psrVYTMOvAexs5TLFBa5YRy8k';

export default function CommentArea({ asin }) {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(URLCommentsAPI + asin + "/comments/", {
            headers: {Authorization: token}
        })
        .then(response => response.json())
        .then(data => setComments(data))
    }, [])

  return (
    <div className='my-3'>
        <h3>Comment Area:</h3>
        <CommentList comments={comments}/>
        <AddComment asin={asin}/>
    </div>
  )
}
