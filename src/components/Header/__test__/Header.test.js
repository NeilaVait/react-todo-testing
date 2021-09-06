import { render, screen } from '@testing-library/react';
import Header from './../Header';

test('should render text passed as props', () => {
  render(<Header title="My header" />);
  const headerEl = screen.getByText(/my header/i);
  expect(headerEl).toBeInTheDocument();
});

// pagal role
it('Header should be a heading with text', () => {
  // arrange
  render(<Header title="My header" />);
  //

  // assert
  const headingEl = screen.getByRole('heading', { name: 'My header' });
  expect(headingEl).toBeInTheDocument();
});

// pagal nematoma title
it('should have a title "second"', () => {
  render(<Header title="My header" />);
  const otherHeading = screen.getByTitle('second');
  expect(otherHeading).toBeInTheDocument();
});

// pagal test id = nerekomenduojama overusint
it('should render main title with id', () => {
  render(<Header title="My header" />);
  const mainHeading = screen.getByTestId('main-title');
  expect(mainHeading).toBeInTheDocument();
});
