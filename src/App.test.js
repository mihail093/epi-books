import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Welcome from './components/Welcome';

// TEST 1
test('Verifico che il componente Welcome venga montato correttamente', () => {
  render(<Welcome />);
  const titleElement = screen.getByText(/Welcome to EpiBOOKS!/i);
  expect(titleElement).toBeInTheDocument()
});

// TEST 2
test('Verifico che il numero di card corrisponda al numero di libri presenti in fantasy', () => {
  render(<App />);
  const fantasyBookCards = screen.getAllByTestId("card-test");
  expect(fantasyBookCards).toHaveLength(150)
})


// TEST 3 
test('Verifico che il componente CommentArea venga montato correttamente', () => {
  render(<App />);
  const buttonDetails = screen.getAllByRole('button', {name: /Book Details/i});
  fireEvent.click(buttonDetails[0]);
  const commentArea = screen.getAllByPlaceholderText(/Add a comment.../i);
  expect(commentArea[0]).toBeInTheDocument()
});

// TEST 4
test('Verifico il filtraggio dei libri', async () => {
  render(<App />);
  const formSearch = screen.getByPlaceholderText(/Find your book. . ./i);
  fireEvent.change(formSearch, { target: { value: 'dragons'}});
  const fantasyBookCards = await screen.(/dragons/i);
  expect(fantasyBookCards).toHaveLength(5)
});

// TEST 5
test('Verifico se cambia il colore del bordo della card dopo il click', () => {
  render(<App />);
  const bookCards = screen.getAllByTestId('card-test');
  expect(bookCards[0]).toHaveStyle('border: none');
  fireEvent.click(bookCards[0]);
  expect(bookCards[0]).toHaveStyle('border: 3px solid red')
})

// TEST 6
test('Verifico che, cliccando su di un secondo libro dopo il primo, il bordo del primo libro ritorni normale', () => {
  render(<App />);
  const bookCards = screen.getAllByTestId('card-test');
  fireEvent.click(bookCards[0]);
  expect(bookCards[0]).toHaveStyle('border: 3px solid red');
  fireEvent.click(bookCards[1]);
  expect(bookCards[0]).toHaveStyle('border: none');
})

// TEST 8
test('Verifico che, cliccando su di un libro con recensioni, esse vengano caricate correttamente', () => {
  render(<App />);
  const buttonDetails = screen.getAllByRole('button', {name: /Book Details/i});
  fireEvent.click(buttonDetails[0]);
  const comment = screen.getByText(/Bel libro/i);
  expect(comment).toBeInTheDocument()
})