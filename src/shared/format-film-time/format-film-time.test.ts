import formatFilmTime from './format-film-time';

describe('Function: formatFilmTime', () => {
  it('returns correct formated film time when hours and 1 digit minites', () => {
    const hours = 2;
    const minutes = 8;
    const totalMinutes = hours * 60 + minutes;
    const expectedResult = '2h 08m';

    const formatedFilmTime = formatFilmTime(totalMinutes);

    expect(formatedFilmTime).toBe(expectedResult);
  });

  it('returns correct formated film time when only minutes"', () => {
    const hours = 0;
    const minutes = 54;
    const totalMinutes = hours * 60 + minutes;
    const expectedResult = '54m';

    const formatedFilmTime = formatFilmTime(totalMinutes);

    expect(formatedFilmTime).toBe(expectedResult);
  });
});
