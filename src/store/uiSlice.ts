import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface UiState {
  isModalOpened: boolean;
}

const initialState: UiState = {
  isModalOpened: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleModal: (state, action: PayloadAction<boolean>) => {
      state.isModalOpened = action.payload;
    },
  },
});

export const { toggleModal } = uiSlice.actions;
export const selectIsModalOpened = (state: RootState) => state.ui.isModalOpened;

const uiReducer = uiSlice.reducer;

export default uiReducer;
