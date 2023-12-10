import { renderHook, act } from '@testing-library/react';
import useInput from './use-input';

describe('Hook: useUserAnswers', () => {
  it('returns array with 4 elements', () => {

    const { result } = renderHook(() => useInput(() => true, 'Error'));
    const [value, setValue, valueError, processValueValidation] = result.current;

    expect(result.current).toHaveLength(4);
    expect(typeof value).toBe('string');
    expect(typeof setValue).toBe('function');
    expect(typeof valueError).toBe('string');
    expect(typeof processValueValidation).toBe('function');
  });

  it('correctly set and validate value', () => {
    const newValue = 'aaa';
    const errorMessage = 'Error';
    const { result } = renderHook(() => useInput((s) => s.length < 1, errorMessage));
    let [value, setValue, valueError, processValueValidation] = result.current;

    expect(value).toBe('');
    expect(valueError).toBe('');

    act(() => setValue(newValue));
    [value, setValue, valueError, processValueValidation] = result.current;

    expect(value).toBe(newValue);
    expect(valueError).toBe('');

    act(() => processValueValidation());
    [value, , valueError] = result.current;

    expect(value).toBe(newValue);
    expect(valueError).toBe(errorMessage);
  });
});
