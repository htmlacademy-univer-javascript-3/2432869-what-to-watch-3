import getRatingDescription from './get-rating-description';

describe('Function: getRatingDescription', () => {
  it('returns "Bad" rating description on rating 2', () => {
    expect(getRatingDescription(2)).toBe('Bad');
  });

  it('returns "Normal" rating description on rating 4', () => {
    expect(getRatingDescription(4)).toBe('Normal');
  });

  it('returns "Good" rating description on rating 6', () => {
    expect(getRatingDescription(6)).toBe('Good');
  });

  it('returns "Very Good" rating description on rating 9', () => {
    expect(getRatingDescription(9)).toBe('Very Good');
  });

  it('returns "Awesome" rating description on rating 10', () => {
    expect(getRatingDescription(10)).toBe('Awesome');
  });
});
