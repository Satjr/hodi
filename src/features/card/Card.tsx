import React from 'react';

export interface CardInterface {
    name: string,
    attack: number,
    health: number,
};

export function Card ({ cardProperties }: {cardProperties: CardInterface}) {
    return (
        <div>
            <div>{cardProperties.name}</div>
            <div>{cardProperties.attack} ATQ</div>
            <div>{cardProperties.health} PV</div>
        </div>
    );
};
