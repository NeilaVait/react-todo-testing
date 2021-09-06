import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddInput from './../AddInput';

// tuscia fn vietoj () => {}
const mockFn = jest.fn();

describe('Input testing', () => {
  it('should render input', () => {
    render(<AddInput setTodos={mockFn} todos={[]} />);
    const InputEl = screen.getByPlaceholderText(/Add a new task/);
    expect(InputEl).toBeInTheDocument();
  });

  // input works
  it('Should be able to enter in input', () => {
    // Arrange
    render(<AddInput setTodos={mockFn} todos={[]} />);
    const inputEl = screen.getByPlaceholderText(/Add a new task/);
    // Act
    // change(El, 'koks change')
    fireEvent.change(inputEl, { target: { value: 'Do sports on Sunday' } });
    // Assert
    expect(inputEl.value).toBe('Do sports on Sunday');
  });

  it('Should clear input after add', () => {
    // ar kai mes paspaudziam mygtuka inputas issivalo
    // Arrange
    render(<AddInput setTodos={mockFn} todos={[]} />);
    const inputEl = screen.getByPlaceholderText(/Add a new task/);

    // Act
    // change(El, 'koks change')
    fireEvent.change(inputEl, { target: { value: 'Do sports on Sunday' } });
    const btnEl = screen.getByRole('button');
    fireEvent.click(btnEl);
    // Assert
    expect(inputEl.value).toBe('');
  });
});
