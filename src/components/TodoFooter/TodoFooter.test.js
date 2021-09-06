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
