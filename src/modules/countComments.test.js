/**
 * @jest-environment jsdom
 */

import countData from './countComments.js';

describe('Testing comments counter', () => {
  test('should return comments(3)', () => {
    const data = [
      {
        comment: 'Nice painting!',
        creation_date: '2023-02-09',
        username: 'Peter',
      },
      {
        comment: 'Amazing!',
        creation_date: '2023-02-08',
        username: 'Michael',
      },
      {
        comment: 'Beautiful painting!',
        creation_date: '2023-02-09',
        username: 'Rupert',
      },
    ];

    const counter = countData(data);
    expect(counter).toBe('Comments(3)');
  });

  test('should return Comments(0)', () => {
    const data = [];

    const counter = countData(data);
    expect(counter).toBe('Comments(0)');
  });
});