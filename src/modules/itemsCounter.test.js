/**
 * @jest-environment jsdom
 */

import getTotalPaintings from './itemsCounter.js';

test('should return total paintings = 0', () => {
  /* Creating container of paintings */
  const gallery = document.createElement('section');

  /* Creating 0 paintings */

  /* Adding 0 paintings to gallery */

  /* Adding to the DOM */

  document.body.appendChild(gallery);

  const counter = getTotalPaintings();
  expect(counter).toBe(0);
});

describe('Testing Total paintings on home page', () => {
  test('should return total paintings = 4', () => {
    /* Creating container of paintings */
    const gallery = document.createElement('section');
    gallery.setAttribute('class', 'gallery');

    /* Creating paintings */
    const painting1 = document.createElement('div');
    painting1.setAttribute('class', 'paintings');
    const painting2 = document.createElement('div');
    painting2.setAttribute('class', 'paintings');
    const painting3 = document.createElement('div');
    painting3.setAttribute('class', 'paintings');
    const painting4 = document.createElement('div');
    painting4.setAttribute('class', 'paintings');

    /* Adding paintings to gallery */

    gallery.appendChild(painting1);
    gallery.appendChild(painting2);
    gallery.appendChild(painting3);
    gallery.appendChild(painting4);

    /* Adding to the DOM */

    document.body.appendChild(gallery);

    const counter = getTotalPaintings();
    expect(counter).toBe(4);
  });
});