import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../consts';

type VideoProcessState = {
  playing: boolean;
}

const initialState: VideoProcessState = {
  playing: false,
};

export const videoProcess = createSlice({
  name: NameSpace.Video,
  initialState,
  reducers: {
    setVideoPlaying: (state, action: PayloadAction<boolean>) => {
      state.playing = action.payload;
    },
  },
});

export const {setVideoPlaying} = videoProcess.actions;
