import checkPasswordValidity from './check-password-validity';

describe('Function: checkPasswordValidity', () => {
  it('returns true, when password is correct 1', () => {
    const password = 'pass0101';

    const checkResult = checkPasswordValidity(password);

    expect(checkResult).toBe(true);
  });

  it('returns true, when password is correct 2', () => {
    const password = '94!Ad5Os9$';

    const checkResult = checkPasswordValidity(password);

    expect(checkResult).toBe(true);
  });

  it('returns false, when password doesn\'t contain any numbers', () => {
    const password = 'pAss';

    const checkResult = checkPasswordValidity(password);

    expect(checkResult).toBe(false);
  });

  it('returns false, when password doesn\'t contain any latin characters', () => {
    const password = '30213#43$';

    const checkResult = checkPasswordValidity(password);

    expect(checkResult).toBe(false);
  });

  it('returns false, when password contains other language characters', () => {
    const password = '@пароль#1231';

    const checkResult = checkPasswordValidity(password);

    expect(checkResult).toBe(false);
  });
});
