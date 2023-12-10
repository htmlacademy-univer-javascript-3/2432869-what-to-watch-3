import formatToTwoDigitString from './format-to-two-digit-string';

describe('Function: formatToTwoDigitString', () => {
  it('returns correct string number when 1 digit', () => {
    const num = 2;
    const expectedResult = '02';

    const formatedStringNumber = formatToTwoDigitString(num);

    expect(formatedStringNumber).toBe(expectedResult);
  });

  it('returns correct string number when 2 digit', () => {
    const num = 46;
    const expectedResult = '46';

    const formatedStringNumber = formatToTwoDigitString(num);

    expect(formatedStringNumber).toBe(expectedResult);
  });

  it('returns correct string when number is float', () => {
    const num = 9.99;
    const expectedResult = '09';

    const formatedStringNumber = formatToTwoDigitString(num);

    expect(formatedStringNumber).toBe(expectedResult);
  });
});
