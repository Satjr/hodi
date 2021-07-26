import React from 'react';
import { board, attack } from './boardSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { CardInterface, Card } from '../card/Card';

export function Board () {
    const playerCards: CardInterface[] = useAppSelector(board).playerSide.cards;
    const opponentCards: CardInterface[] = useAppSelector(board).opponentSide.cards;
    const dispatch = useAppDispatch();

    return (
        <>
            <button onClick={() => dispatch(attack([0, 0]))}>Murlock Attack Mage</button>
            <button onClick={() => dispatch(attack([0, 1]))}>Murlock attack Vampire</button>
            <button onClick={() => dispatch(attack([1, 0]))}> Dragon attack Mage</button>
            <button onClick={() => dispatch(attack([1, 1]))}> Dragon attack Vampire</button>
            <div>
                { opponentCards.map((card, i) => <Card
                    key={`${card}${i}`}
                    side='opponent'
                    index={i}
                    cardProperties={card}
                />) }
            </div>
            <hr/>
            <div>
                { playerCards.map((card, i) => <Card
                    key={`${card}${i}`}
                    side='player'
                    index={i}
                    cardProperties={card}
                />) }
            </div>
        </>
    );
};
