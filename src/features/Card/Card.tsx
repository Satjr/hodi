import React, { useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';

import { removeDeadCard } from '../board/boardSlice'
export interface CardInterface {
    name: string,
    attack: number,
    health: number,
};

export function Card ({ cardProperties, side, index }: {
    cardProperties: CardInterface,
    side: string,
    index: number
}) {
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (cardProperties.health < 0) {
            dispatch(removeDeadCard({index, side}))
            return () => {
                console.log(`unmount ${cardProperties.name}`)
            }
        }
        return () => { console.log('unmount whatever ')}
    }, [cardProperties.health, cardProperties.name, dispatch, index, side])
    
    return (
        <div>
            <div><strong>{cardProperties.name}</strong></div>
            <div>{cardProperties.attack} ATQ</div>
            <div>{cardProperties.health} PV</div>
        </div>
    );
};
