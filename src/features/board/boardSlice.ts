import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { CardInterface } from '../card/Card'

type Side = {
    cards: CardInterface[]
}

const initialState: {playerSide: Side, opponentSide: Side} = {
    playerSide: {
        cards: [
            {name: 'Murloc', attack: 5, health: 3},
            {name: 'Dragon', attack: 3, health: 8}
        ]
    },
    opponentSide: {
        cards: [
            {name: 'Mage', attack: 1, health: 8},
            {name: 'Vampire', attack: 6, health: 5}
        ]
    }
};

const BoardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        attack: (state, action: PayloadAction<[number, number]>) => {
            state.playerSide.cards[action.payload[0]].health -= state.opponentSide.cards[action.payload[1]].attack
            state.opponentSide.cards[action.payload[1]].health -= state.playerSide.cards[action.payload[0]].attack
        },
        removeDeadCard: (state, action: PayloadAction<{index: number, side: string}>) => {
            // console.log(`${cardProperties.name} is dead (life is ${cardProperties.health})`)
            console.log({ index: action.payload.index, side: action.payload.side })
            console.log({ state: current(state) })
            if (action.payload.side === 'opponent') {
                return {
                    opponentSide: {
                        ...state.opponentSide,
                        cards: state.opponentSide.cards.filter((item, i) => {
                            return i !== action.payload.index
                        })
                    },
                    playerSide: state.playerSide
                }
            }

            if (action.payload.side === 'player') {
                return {
                    playerSide: {
                        ...state.playerSide,
                        cards: state.playerSide.cards.filter((item, i) => {
                            return i !== action.payload.index
                        })
                    },
                    opponentSide: state.opponentSide
                }
            }
        }
    }
});

export const { attack, removeDeadCard } = BoardSlice.actions;

export const board = (state: RootState) => state.board;

export default BoardSlice.reducer;
