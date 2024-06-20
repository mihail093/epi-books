import React, { useContext } from 'react';
import {Container, Nav, Navbar, NavDropdown, Form, Button} from 'react-bootstrap';
import { ThemeContext } from '../mudules/Contexts';
import { Link } from 'react-router-dom';

export default function MyNav({ search, handleChange}) {

    let [themeCtx, setThemeCtx] = useContext(ThemeContext);

  return (
    <Navbar bg={themeCtx} data-bs-theme={themeCtx} fixed="top">
        <Container>
            <Link to="/" className='text-decoration-none'>
                <Navbar.Brand>EpiBOOKS</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <NavDropdown title="Category" id="basic-nav-dropdown">
                        <Link className="nav-link" to="/category/history">History</Link>
                        <Link className="nav-link" to="/category/horror">Horror</Link>
                        <Link className="nav-link" to="/category/romance">Romance</Link>
                        <Link className="nav-link" to="/category/scifi">Scifi</Link>
                        <Link className="nav-link" to="/">Fantasy</Link>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Container>
        <Form.Group className="w-25 m-3">
            <Form.Control type="search" placeholder="Find your book. . ." value={search} onChange={handleChange}/>
        </Form.Group>
        <Button className='m-3' variant={themeCtx} onClick={() => {
            themeCtx === 'light' ? setThemeCtx('dark') : setThemeCtx('light')
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brightness-high" viewBox="0 0 16 16">
            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
        </svg>
        </Button>
    </Navbar>
  )
}
