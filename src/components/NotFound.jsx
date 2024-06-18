import React from 'react';
import { Alert } from 'react-bootstrap';

export default function NotFound() {
  return (
    <div className='container text-center pt-3 mb-3'>
        <Alert variant='danger'>
            <h1>Page not found!</h1>
        </Alert>
    </div>
  )
}
