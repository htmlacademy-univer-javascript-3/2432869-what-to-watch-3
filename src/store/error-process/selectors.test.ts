import { StatusCodes } from 'http-status-codes';
import { NameSpace } from '../../consts';
import { ErrorProcessState } from '../../types/state';
import { getErrorCode } from './selectors';

describe('ErrorProcess selectors', () => {
  it('returns error code from state', () => {
    const errorCode = StatusCodes.UNAUTHORIZED;
    const state: ErrorProcessState = { errorCode };

    const result = getErrorCode({ [NameSpace.Error]: state });

    expect(result).toBe(errorCode);
  });
});
