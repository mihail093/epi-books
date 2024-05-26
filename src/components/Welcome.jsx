import React from 'react';
import { Alert } from 'react-bootstrap';

export default function Welcome() {
  return (
    <div className='container text-center my-3'>
        <Alert variant={'warning'}>
            <h1>Welcome to EpiBOOKS!</h1>
        </Alert>
    </div>
  )
}
