import { Superhero } from "./superhero.interface";
import { PlayerState } from "./player-state.interface";
import { getAvailableCards } from "../services/card-storage";

/**
 * SuperheroGame class contains the game initialisation logic as well as game state.
 * Currently, there is no game interaction logic - i.e. no actions for changing the game state once the state is initialised.
 *
 * Game initialisation logic:
 * - Initialise the game for 2 players.
 * - Select the cards players will be playing with from the set of available cards, where the number of cards selected
 * is decided by CARD_PLAYING_SET_SIZE constant.
 * - Distribute cards to each player randomly, so that both players have the same amount of cards.
 * - Store the distributed cards for each player in an internal state.
 */
export class SuperheroGame {
    /** The number of cards that will be used for a game. */
    private readonly CARD_PLAYING_SET_SIZE = 20;
    /** Contains game state related to each player. */
    public playersState: PlayerState[] = []

    constructor() {
        const availableCards: Superhero[] = getAvailableCards()
        /** Shuffled set of cards that will be used for a game. */
        const cardPlayingSet = this.getCardPlayingSet(availableCards);
        this.dealCards(cardPlayingSet)
    }

    private dealCards(cardPlayingSet: Superhero[]): void {
        if (this.CARD_PLAYING_SET_SIZE % 2 != 0) {
            throw Error('CARD_PLAYING_SET_SIZE must be an even number.')
        }
        this.playersState.push({
            assignedCards: cardPlayingSet.slice(0, this.CARD_PLAYING_SET_SIZE / 2),
            score: 0
        })
        this.playersState.push({
            assignedCards: cardPlayingSet.slice(this.CARD_PLAYING_SET_SIZE / 2, this.CARD_PLAYING_SET_SIZE),
            score: 0
        })
    }

    /**
     * From the list of all available cards, select cards that will be used for a game.
     * Shuffle all the available cards and take first 20.
     */
    private getCardPlayingSet(availableCards: Superhero[]): Superhero[] {
        return this.shuffleCards(availableCards).slice(0, this.CARD_PLAYING_SET_SIZE);
    }

    private shuffleCards(availableCards: Superhero[]): Superhero[] {
        const shuffledAvailableCards = [...availableCards]
        for (let i = shuffledAvailableCards.length - 1; i > 0; i--) {
            const j = this.getRandomInt(0, i + 1)
            const jCard = shuffledAvailableCards[j]
            shuffledAvailableCards[j] = shuffledAvailableCards[i]
            shuffledAvailableCards[i] = jCard
        }
        return shuffledAvailableCards
    }

    /**
     * Returns a random int in range <min, max), i.e. maximum is exclusive.
     */
    private getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min)
    }


}
