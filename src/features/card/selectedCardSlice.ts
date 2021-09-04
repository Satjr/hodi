import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store'

const initialState: {selectedCardPosition:number|null} = {
    selectedCardPosition: null,
};

const SelectedCardSlice = createSlice({
    name: 'selectedCard',
    initialState,
    reducers: {
        selectCard: (state, action: PayloadAction<number|null>) => {
            state.selectedCardPosition = action.payload;
        },
        unSelectCard: (state) => {
            state.selectedCardPosition = null;
        },
    }
});

export const { selectCard, unSelectCard } = SelectedCardSlice.actions;

export const selectedCard = (state: RootState) => state.selectedCard.selectedCardPosition;

export default SelectedCardSlice.reducer;
