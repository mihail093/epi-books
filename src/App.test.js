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

// TEST 4
test('Verifico il filtraggio dei libri', async () => {
  render(<App />);
  const formSearch = screen.getByPlaceholderText(/Find your book. . ./i);
  fireEvent.change(formSearch, { target: { value: 'dragons'}});
  const fantasyBookCards = await screen.findAllByTestId('card-test');
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

// TEST 7
test('Verifico che all avvio della pagina, non ci siano istanze del componente SingleComment all interno del DOM', () => {
  render(<App />);
  const singleComment = screen.queryAllByTestId('single-comment');
  expect(singleComment).toHaveLength(0)
})

describe('Test sulla pagina BookDetail', () => {
  // TEST 3 
  it('Verifico che il componente CommentArea venga montato correttamente', () => {
    render(<App />);
    const buttonDetails = screen.getAllByRole('button', {name: /Book Details/i});
    fireEvent.click(buttonDetails[0]);
    const commentArea = screen.getAllByPlaceholderText(/Add a comment.../i);
    expect(commentArea[0]).toBeInTheDocument()
  });

  // TEST 8
  it('Verifico che, cliccando su di un libro con recensioni, esse vengano caricate correttamente', async () => {
    render(<App />);
    const comment = await screen.findByText(/Bel libro/i);
    expect(comment).toBeInTheDocument()
  })
})