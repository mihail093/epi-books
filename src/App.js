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
import NotFound from './components/NotFound';
import BookDetail from './components/BookDetail';
import { useState } from 'react';
import { ThemeContext } from './mudules/Contexts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const [search, setSearch] = useState('');
  const handleChange = (e) => setSearch(e.target.value);
  let [theme, setTheme] = useState('light');

  return (
    <>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <BrowserRouter>
          <MyNav search={search} handleChange={handleChange}/>
          <div className={theme + "mode"}>
            <Welcome />
            <Routes>
              <Route index element={<AllTheBooks books={Fantasy} search={search} />}></Route>
              <Route path='/category/history' element={<AllTheBooks books={History} search={search} />}></Route>
              <Route path='/category/horror' element={<AllTheBooks books={Horror} search={search} />}></Route>
              <Route path='/category/romance' element={<AllTheBooks books={Romance} search={search} />}></Route>
              <Route path='/category/scifi' element={<AllTheBooks books={Scifi} search={search} />}></Route>
              <Route path='/details/:asin' element={<BookDetail />}></Route>
              <Route path='*' element={<NotFound />}></Route>
            </Routes>
            <MyFooter />
          </div>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
