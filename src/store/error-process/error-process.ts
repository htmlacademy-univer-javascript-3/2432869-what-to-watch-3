import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';
import { ErrorProcessState } from '../../types/state';

const initialState: ErrorProcessState = {
  errorCode: undefined,
};

export const errorProcess = createSlice({
  name: NameSpace.Error,
  initialState,
  reducers: {
    setErrorCode: (state, action: PayloadAction<number | undefined>) => {
      state.errorCode = action.payload;
    },
  },
});

export const {setErrorCode} = errorProcess.actions;
