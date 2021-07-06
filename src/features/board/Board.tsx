import React from 'react';
import { Card, board, attack } from './boardSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

type FakeCardForExampleProps = {
    cardProperties: {
        name: string
    },
    key: string
};

function FakeCardForExample ({ cardProperties }: FakeCardForExampleProps) {
    return <div>{ cardProperties.name }</div>;
};

export function Board () {
    const playerCards: Card[] = useAppSelector(board).playerSide.cards;
    const opponentCards: Card[] = useAppSelector(board).opponentSide.cards;
    const dispatch = useAppDispatch();

    return (
        <>
            {/* Boutons pour exemple */}
            <button onClick={() => dispatch(attack([0, 1]))}>Attack Mage</button>
            <button onClick={() => dispatch(attack([1, 1]))}>Attack Vampire</button>
            <div>
                { opponentCards.map((card, i) => <FakeCardForExample key={`${card}${i}`} cardProperties={card} />) }
            </div>
            <hr/>
            <div>
                { playerCards.map((card, i) => <FakeCardForExample key={`${card}${i}`} cardProperties={card} />) }
            </div>
        </>
    );
};
