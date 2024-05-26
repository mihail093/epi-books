import './App.css';
import MyFooter from './components/MyFooter';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import Fantasy from './books/fantasy.json';
import History from './books/history.json';
import Horror from './books/horror.json';
import Romance from './books/romance.json';
import Scifi from './books/scifi.json';
import AllTheBooks from './components/AllTheBooks';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function App() {

  let [type, setType] = useState('Fantasy');

  return (
    <>
      <MyNav />
      <Welcome />
      <div className='container d-flex justify-content-between my-3'>
        <Button variant="light" onClick={() => setType('Fantasy')}>FANTASY</Button>
        <Button variant="light" onClick={() => setType('History')}>HISTORY</Button>
        <Button variant="light" onClick={() => setType('Horror')}>HORROR</Button>
        <Button variant="light" onClick={() => setType('Romance')}>ROMANCE</Button>
        <Button variant="light" onClick={() => setType('Scifi')}>SCIFI</Button>
      </div>
      {type === 'Fantasy' && <AllTheBooks books={Fantasy} />}
      {type === 'History' && <AllTheBooks books={History} />}
      {type === 'Horror' && <AllTheBooks books={Horror} />}
      {type === 'Romance' && <AllTheBooks books={Romance} />}
      {type === 'Scifi' && <AllTheBooks books={Scifi} />}
      <MyFooter />
    </>
  );
}

export default App;
