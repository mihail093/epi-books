import React, { useState, useEffect } from 'react';
import {Alert} from 'react-bootstrap';


function ErrorMessage({ message }) {

  const [showError, setShowError] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowError(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

    return (
      <>
      {showError && (
        <Alert variant="danger">
          <p>{message}</p>
        </Alert>
      )}
      </>
    );
}

function AlertDismissible({ message }) {

  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {show && (
      <Alert variant="success">
        <p>{message}</p>
      </Alert>
    )}
    </>
  );
}

export { ErrorMessage, AlertDismissible }