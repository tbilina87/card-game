import * as React from "react"
import { useState } from "react"
import { SuperheroGame } from "../../superhero-game/superhero-game";
export const GameBoardPage = () => {
    const [superheroGame] = useState(new SuperheroGame())

    const playersState = superheroGame.playersState
    if (playersState.length != 2) {
        console.error('Players state does not have the length of 2.')
        throw new Error('Game initialisation error.')
    }
    const player1State = playersState[0];
    const player2State = playersState[1];

    return <div>
        <div style={{background: "#EB984E"}}>
            <div data-testid='card-deck-1' style={{display: 'flex', padding: '10px', alignItems: 'center'}}>
                Player 1 cards:
                {player1State.assignedCards.map(card =>
                    <div key={card.name} data-testid='superhero-card' style={{
                        height: '220px',
                        width: '145px',
                        margin: '5px',
                        border: '7px solid white',
                        borderRadius: '10px',
                        background: '#A9CCE3',
                        color: 'black',
                        textAlign: 'center'
                    }}>
                        <div style={{
                            background: '#bc5090',
                            height: '100%',
                            boxSizing: 'border-box',
                            padding: '80px 5px',
                            fontSize: '20px',
                            fontWeight: 'bold'
                        }}>
                            SuperHero Card
                        </div>
                    </div>)
                }
            </div>
            <div style={{border: '2px dashed black', width: '70px', margin: '30px auto', padding: '115px 250px'}}>Play
                Area
            </div>
            <div data-testid='card-deck-2' style={{display: 'flex', padding: '10px', alignItems: 'center'}}>
                Player 2 cards:
                {player2State.assignedCards.map(card =>
                    <div key={card.name} data-testid='superhero-card' style={{
                        height: '220px',
                        width: '145px',
                        margin: '5px',
                        border: '7px solid white',
                        borderRadius: '10px',
                        background: '#A9CCE3',
                        color: 'black',
                        textAlign: 'center'
                    }}>
                        <div style={{
                            height: '100%',
                            boxSizing: 'border-box',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '10px 5px'
                        }}>
                            <div style={{fontWeight: "bold", paddingBottom: '4px'}}>{card.name}</div>
                            <div style={{
                                border: '2px dotted black',
                                borderRadius: '10px',
                                padding: '20px 5px',
                                width: '80px'
                            }}>SuperHero Image
                            </div>
                            <div style={{backgroundColor: '#f5f5f5', padding: '10px', borderRadius: '10px'}}>
                                <div>Attack score: {card.attackScore}</div>
                                <div>Defense score: {card.defenseScore}</div>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    </div>
}
