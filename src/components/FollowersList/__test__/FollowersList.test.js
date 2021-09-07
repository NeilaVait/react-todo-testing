import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockFList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

const mockResponse = {
  results: [
    {
      name: {
        first: 'James',
        last: 'Bond',
      },
      login: {
        username: 'orangetiger284',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/women/12.jpg',
      },
    },
  ],
};

const server = setupServer(
  rest.get('https://randomuser.me/api/', (req, res, ctx) => {
    return res(ctx.json(mockResponse));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Async testing', () => {
  it('Renders Folowers on the screen', async () => {
    render(<MockFList />);

    // screen.debug();
    const contactElArr = await screen.findAllByTestId(/contact-el/);
    expect(contactElArr).not.toHaveLength(0);
    expect(contactElArr).toHaveLength(1);
    // expect(contactElArr).toBeInTheDocument();
  });

  it('Renders One Follower card on the screen', async () => {
    render(<MockFList />);
    let contactEl;
    await waitFor(() => {
      contactEl = screen.getByTestId(/contact-el-0/);
    });
    // const contactEl = await screen.findByTestId(/contact-el-0/);
    expect(contactEl).toBeInTheDocument();
    // screen.debug();
  });
});
