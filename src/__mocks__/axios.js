const mockResponse = {
  data: {
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
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
