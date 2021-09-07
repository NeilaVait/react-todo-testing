import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from './../FollowersList';

const MockFList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe('async testing', () => {
  it('renders follower on the screen', async () => {
    render(<MockFList />);
    // screen.debug();
    const contactElArr = await screen.findAllByTestId('contact-el');
    expect(contactElArr).not.toHaveLength(0);
  });
});
