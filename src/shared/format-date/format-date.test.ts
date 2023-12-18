import formatDate from './format-date';

describe('Function: formatDate', () => {
  it('should return correct formated date 1', () => {
    const date = '2023-03-04T21:00:00.251Z';
    const expectedDate = 'March 04, 2023';

    const formatedDate = formatDate(date);

    expect(formatedDate).toBe(expectedDate);
  });

  it('should return correct formated date 2"', () => {
    const date = '2017-11-26T21:00:00.251Z';
    const expectedDate = 'November 26, 2017';

    const formatedDate = formatDate(date);

    expect(formatedDate).toBe(expectedDate);
  });
});
