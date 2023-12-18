import calculateRemainingTime from './calculate-remaining-time';

describe('Function: calculateRemainingTime', () => {
  it('returns correct remaining time 1', () => {
    const hours1 = 2;
    const minutes1 = 30;
    const seconds1 = 58;
    const totalSeconds = hours1 * 60 * 60 + minutes1 * 60 + seconds1;
    const hours2 = 1;
    const minutes2 = 15;
    const seconds2 = 23;
    const currentSeconds = hours2 * 60 * 60 + minutes2 * 60 + seconds2;
    const expectedResult = '-01:15:35';

    const remainingTime = calculateRemainingTime(totalSeconds, currentSeconds);

    expect(remainingTime).toBe(expectedResult);
  });

  it('returns correct remaining time 2', () => {
    const hours1 = 2;
    const minutes1 = 30;
    const seconds1 = 3;
    const totalSeconds = hours1 * 60 * 60 + minutes1 * 60 + seconds1;
    const hours2 = 1;
    const minutes2 = 45;
    const seconds2 = 41;
    const currentSeconds = hours2 * 60 * 60 + minutes2 * 60 + seconds2;
    const expectedResult = '-44:22';

    const remainingTime = calculateRemainingTime(totalSeconds, currentSeconds);

    expect(remainingTime).toBe(expectedResult);
  });
});
