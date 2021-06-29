import React from 'react'

type FakeCardForExampleProps = {
    cardProperties: {
        name: string
    },
    key: string
}

type BoardProps = {
    playedCards: {name: string}[]
}

function FakeCardForExample ({ cardProperties }: FakeCardForExampleProps) {
    return <div>{ cardProperties.name }</div>
}

export function Board ({ playedCards }: BoardProps) {
    return (
        <div>
            { playedCards.map((card, i) => <FakeCardForExample key={`${card}${i}`} cardProperties={card} />) }
        </div>
    )
}
