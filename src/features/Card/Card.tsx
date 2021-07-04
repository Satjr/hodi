import React from 'react';

type CardProps = {
    cardProperties: {
        name: string,
        attack: number,
        health: number,
    },
    key: string
};

export function Card ({ cardProperties }: CardProps) {
    return (
        <div>
            <div>{cardProperties.name}</div>
            <div>{cardProperties.attack} ATQ</div>
            <div>{cardProperties.health} PV</div>
        </div>
    );
};
