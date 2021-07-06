import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Card {name: string};

const initialState: {playerSide: {cards: Card[]}, opponentSide: {cards: Card[]}} = {
    playerSide: {
        cards: [
            {name: 'Murloc'},
            {name: 'Dragon'}
        ]
    },
    opponentSide: {
        cards: [
            {name: 'Mage'},
            {name: 'Vampire'}
        ]
    }
};

export const BoardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        attack: (state, action: PayloadAction<[number, number]>) => { // ici number corresponds à l'index de la carte dans le tableau playerSide et opponent
            // juste pour exemple, à définir quand l'interface Card sera complétée (besoin des propriétées PV et ATK)
            state.opponentSide.cards[action.payload[0]].name += ' aie!'
        }
    }
});

export const { attack } = BoardSlice.actions;

export const board = (state: RootState) => state.board;

export default BoardSlice.reducer;
