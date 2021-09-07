import { BrowserRouter } from 'react-router-dom';
import TodoFooter from './TodoFooter';
import { render, screen } from '@testing-library/react';

function MockTodoFooter({ numberOfIncompleteTasks }) {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
}

describe('footer tests', () => {
  // hooks
  beforeAll(() => {
    // vyksta pries vykdant visus testus esancius describe bloke
    console.log('before all');
  });

  beforeEach(() => {
    // vyksta pries kiekviena testa describe bloke
    console.log('before each');
  });

  afterEach(() => {
    // vyksta po kiekvieno testo describe bloke
    console.log('after each');
  });

  afterAll(() => {
    // vyksta po visu testu describe bloke
    console.log('after all');
  });

  it('should render correct amount of tasks', () => {
    // arrange
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    // act

    // assert
    const paragEl = screen.getByText(/1 task left/i);
    expect(paragEl).toBeInTheDocument();
  });

  it('should render correct html el p', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paragEl = screen.getByText(/1 task left/i);
    expect(paragEl).toBeInTheDocument();
  });
});
