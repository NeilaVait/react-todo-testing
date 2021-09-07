import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

function addToTodo(todoArr) {
  // ivedam reiksme, paspaudziam mygtuka
  const inputEl = screen.getByPlaceholderText(/Add a new task/);
  // gauti mygtuka
  const btnEl = screen.getByRole('button', { name: /add/i });
  // cikle
  todoArr.forEach((todo) => {
    fireEvent.change(inputEl, { target: { value: todo } });
    // paspaudziam mygtuka
    fireEvent.click(btnEl);
  });
}

it('Should add single todo to a list', () => {
  render(<MockTodo />);
  addToTodo(['Do sports on Sunday']);
  const todoAddedEl = screen.getByText('Do sports on Sunday');
  // expektinam rasti ivesta reiksme todo liste
  // Assert
  expect(todoAddedEl).toBeInTheDocument();
  expect(todoAddedEl).toHaveClass('todo-item');
});

it('Should add multiple todos to a list', () => {
  // taip pat kaip auksciau tik
  render(<MockTodo />);
  // ivedam ir paspaudziam 3 k
  // vietoj rankinio ivedimo, pasidaryti funkcija kuri gauna masyva
  // ir ivedas masyvo el reiksme ir paspaudzia mygtuka
  addToTodo(['one', 'two', 'three']);

  const todoAddedArr = screen.getAllByTestId('todo-item');
  // expektinam rasti ivesta reiksme todo liste
  // Assert
  expect(todoAddedArr).toHaveLength(3);
});

it('Task should not have completed class when added to list', () => {
  // irasom reiksme
  //mygtuko paspaudimo
  //pridejomo i sarasa
  // pasiziurim i klase
  render(<MockTodo />);
  addToTodo(['Do sports on Sunday']);
  const todoAddedEl = screen.getByText('Do sports on Sunday');
  // expektinam rasti ivesta reiksme todo liste
  // Assert
  expect(todoAddedEl).not.toHaveClass('todo-item-active');
});

test('Task should be gray when clicked(add a class)', () => {
  // irasom reiksme
  //mygtuko paspaudimo
  //pridejomo i sarasa
  // paspaudziam
  // pasiziurim ar turi klase todo-item-active
  render(<MockTodo />);
  addToTodo(['Do sports on Sunday']);
  const todoAddedEl = screen.getByText('Do sports on Sunday');
  // expektinam rasti ivesta reiksme todo liste
  // Assert
  fireEvent.click(todoAddedEl);
  expect(todoAddedEl).toHaveClass('todo-item-active');
});
