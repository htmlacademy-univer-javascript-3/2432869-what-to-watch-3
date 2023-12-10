import checkEmailValidity from './check-email-validity';

describe('Function: checkEmailValidity', () => {
  it('returns true, when email is correct', () => {
    const email = 'user11@site.com';

    const checkResult = checkEmailValidity(email);

    expect(!!checkResult).toBe(true);
  });

  it('returns false, when email is uncorrect 1', () => {
    const email = 'user11';

    const checkResult = checkEmailValidity(email);

    expect(!!checkResult).toBe(false);
  });

  it('returns false, when email is uncorrect 2', () => {
    const email = 'user11@site';

    const checkResult = checkEmailValidity(email);

    expect(!!checkResult).toBe(false);
  });

  it('returns false, when email is uncorrect 3', () => {
    const email = '@site.com';

    const checkResult = checkEmailValidity(email);

    expect(!!checkResult).toBe(false);
  });

  it('returns false, when email is uncorrect 4', () => {
    const email = 'site.com';

    const checkResult = checkEmailValidity(email);

    expect(!!checkResult).toBe(false);
  });
});
