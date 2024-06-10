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
import { ThemeContext } from './mudules/Contexts';

function App() {

  let [type, setType] = useState('Fantasy');
  const [search, setSearch] = useState('');
  const handleChange = (e) => setSearch(e.target.value);
  let [theme, setTheme] = useState('light');

  return (
    <>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <MyNav search={search} handleChange={handleChange}/>
        <div className={theme + "mode"}>
          <Welcome />
          <div className='container d-flex justify-content-between my-3'>
            <Button variant={theme} onClick={() => setType('Fantasy')}>FANTASY</Button>
            <Button variant={theme} onClick={() => setType('History')}>HISTORY</Button>
            <Button variant={theme} onClick={() => setType('Horror')}>HORROR</Button>
            <Button variant={theme} onClick={() => setType('Romance')}>ROMANCE</Button>
            <Button variant={theme} onClick={() => setType('Scifi')}>SCIFI</Button>
          </div>
          {type === 'Fantasy' && <AllTheBooks books={Fantasy} search={search} />}
          {type === 'History' && <AllTheBooks books={History} search={search} />}
          {type === 'Horror' && <AllTheBooks books={Horror} search={search} />}
          {type === 'Romance' && <AllTheBooks books={Romance} search={search} />}
          {type === 'Scifi' && <AllTheBooks books={Scifi} search={search} />}
          <MyFooter />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
