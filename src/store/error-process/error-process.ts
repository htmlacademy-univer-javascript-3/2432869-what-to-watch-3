import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';

type ErrorProcessState = {
  errorCode: number;
}

const initialState: ErrorProcessState = {
  errorCode: -1,
};

export const errorProcess = createSlice({
  name: NameSpace.Error,
  initialState,
  reducers: {
    setErrorCode: (state, action: PayloadAction<number>) => {
      state.errorCode = action.payload;
    },
  },
});

export const {setErrorCode} = errorProcess.actions;
