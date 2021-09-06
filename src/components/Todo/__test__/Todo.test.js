import { screen, render, fireEvent } from '@testing-library/react';
import Todo from './../Todo';
import AddInput from './../../AddInput/AddInput';
import { BrowserRouter } from 'react-router-dom';

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

it('should add todo to list', () => {
  render(<MockTodo />);
  const inputEl = screen.getByPlaceholderText(/Add a new task/);
  fireEvent.change(inputEl, { target: { value: 'Do sports on Sunday' } });
  const btnEl = screen.getByRole('button', { name: /add/i });
  fireEvent.click(btnEl);
  const todoAddedEl = screen.getByText('Do sports on Sunday');
  // assert
  expect(todoAddedEl).toBeInTheDocument();
  expect(todoAddedEl).toHaveClass('todo-item');
});

it('should add multiple todos to list', () => {
  render(<MockTodo />);
  const inputEl = screen.getByPlaceholderText(/Add a new task/);
  const btnEl = screen.getByRole('button', { name: /add/i });
  fireEvent.change(inputEl, { target: { value: 'Do sports on Sunday' } });
  fireEvent.click(btnEl);
  fireEvent.change(inputEl, { target: { value: 'Do nothing' } });
  fireEvent.click(btnEl);
  const todoAddedEl = screen.getByTestId(0);
  const todoAddedEl1 = screen.getByTestId(1);
  expect(todoAddedEl).toBeInTheDocument();
  expect(todoAddedEl).toHaveClass('todo-item');
  expect(todoAddedEl1).toBeInTheDocument();
  expect(todoAddedEl1).toHaveClass('todo-item');
});

it('new todo should not have completed class', () => {
  render(<MockTodo />);
  const inputEl = screen.getByPlaceholderText(/Add a new task/);
  const btnEl = screen.getByRole('button', { name: /add/i });
  fireEvent.change(inputEl, { target: { value: 'Do sports on Sunday' } });
  fireEvent.click(btnEl);
  const todoAddedEl = screen.getByText('Do sports on Sunday');
  expect(todoAddedEl).not.toHaveClass('todo-item-active');
});

it('added todo should contain completed class', () => {
  render(<MockTodo />);
  const inputEl = screen.getByPlaceholderText(/Add a new task/);
  fireEvent.change(inputEl, { target: { value: 'Do sports on Sunday' } });
  const btnEl = screen.getByRole('button', { name: /add/i });
  fireEvent.click(btnEl);
  const todoAddedEl = screen.getByText('Do sports on Sunday');
  fireEvent.click(todoAddedEl);
  expect(todoAddedEl).toHaveClass('todo-item-active');
});
