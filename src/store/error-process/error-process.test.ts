import { errorProcess, setErrorCode } from './error-process';
import { StatusCodes } from 'http-status-codes';

describe('ErrorProcess Slice', () => {
  it('returns initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { errorCode: StatusCodes.UNAUTHORIZED };

    const result = errorProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('returns default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { errorCode: undefined };

    const result = errorProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('set error code with "setErrorCode" action', () => {
    const expectedErrorCode = StatusCodes.UNAUTHORIZED;
    const initialState = { errorCode: undefined };

    const result = errorProcess.reducer(initialState, setErrorCode(expectedErrorCode));

    expect(result.errorCode).toEqual(expectedErrorCode);
  });
});
