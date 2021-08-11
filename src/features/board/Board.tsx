import React, { useEffect } from 'react';
import { board, attack } from './boardSlice';
import {selectCard, unSelectCard, selectedCard} from '../card/selectedCardSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { CardInterface, Card } from '../card/Card';
import { useSelector } from 'react-redux';

export function Board () {
    const playerCards: CardInterface[] = useAppSelector(board).playerSide.cards;
    const opponentCards: CardInterface[] = useAppSelector(board).opponentSide.cards;
    const dispatch = useAppDispatch();
    const selectedCardPosition = useSelector(selectedCard);

    useEffect(() => {
        window.addEventListener('mouseup', handleDeselectCard);
        return () => {
            window.removeEventListener('mouseup', handleDeselectCard);
        };
    }, [selectedCardPosition]);

    const handleSelectCard = (cardPosition:number) => {
        if (selectedCardPosition === null) {
            dispatch(selectCard(cardPosition))
        }
    }

    const handleDeselectCard = (event:MouseEvent) => {
        if (event.which === 3) {
            event.preventDefault();
            dispatch(unSelectCard());
        }
    }

    const handleContextMenu = (event:React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault();
    }

    return (
        <>
            <button onClick={() => dispatch(attack([0, 0]))}>Murlock Attack Mage</button>
            <button onClick={() => dispatch(attack([0, 1]))}>Murlock attack Vampire</button>
            <button onClick={() => dispatch(attack([1, 0]))}> Dragon attack Mage</button>
            <button onClick={() => dispatch(attack([1, 1]))}> Dragon attack Vampire</button>
            <div>
                { opponentCards.map((card, i) => (
                    <div>
                        <Card key={`${card}${i}`} cardProperties={card} />
                    </div>
                )) }
            </div>
            <hr/>
            <div>
                { playerCards.map((card, i) => (
                    <div
                        onClick={() => { handleSelectCard(i) }}
                        onContextMenu={handleContextMenu}
                        style={{border: (selectedCardPosition === i) ? '1px solid black': ''}}
                    >
                        <Card key={`${card}${i}`} cardProperties={card} />
                    </div>
                )) }
            </div>
        </>
    );
};
