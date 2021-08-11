import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import boardReducer from '../features/board/boardSlice';
import selectedCardReducer from '../features/card/selectedCardSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    board: boardReducer,
    selectedCard: selectedCardReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
