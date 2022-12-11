import {SuperheroGame} from "./superhero-game";

jest.mock("../services/card-storage", () => ({
    getAvailableCards: () => [
        {name: 'Super Name1', attackScore: 10, defenseScore: 4},
        {name: 'Super Name2', attackScore: 10, defenseScore: 4},
        {name: 'Super Name3', attackScore: 10, defenseScore: 4},
        {name: 'Super Name4', attackScore: 10, defenseScore: 4},
        {name: 'Super Name5', attackScore: 10, defenseScore: 4},
        {name: 'Super Name6', attackScore: 10, defenseScore: 4},
        {name: 'Super Name7', attackScore: 10, defenseScore: 4},
        {name: 'Super Name8', attackScore: 10, defenseScore: 4},
        {name: 'Super Name9', attackScore: 10, defenseScore: 4},
        {name: 'Super Name10', attackScore: 10, defenseScore: 4},
        {name: 'Super Name11', attackScore: 10, defenseScore: 4},
        {name: 'Super Name12', attackScore: 10, defenseScore: 4},
        {name: 'Super Name13', attackScore: 10, defenseScore: 4},
        {name: 'Super Name14', attackScore: 10, defenseScore: 4},
        {name: 'Super Name15', attackScore: 10, defenseScore: 4},
        {name: 'Super Name16', attackScore: 10, defenseScore: 4},
        {name: 'Super Name17', attackScore: 10, defenseScore: 4},
        {name: 'Super Name18', attackScore: 10, defenseScore: 4},
        {name: 'Super Name19', attackScore: 10, defenseScore: 4},
        {name: 'Super Name20', attackScore: 10, defenseScore: 4},
        {name: 'Super Name21', attackScore: 10, defenseScore: 4}
    ]
}))

describe('Superhero game', () => {
    it('Game should be initialised for two players', () => {
        const game = new SuperheroGame()
        expect(game.playersState.length).toBe(2)
    })
    it('During game initialisation, each player should be initialised with a set of cards and a score of 0', () => {
        const game = new SuperheroGame()
        expect(game.playersState[0].assignedCards.length).toBe(10)
        expect(game.playersState[0].score).toBe(0)
        expect(game.playersState[1].assignedCards.length).toBe(10)
        expect(game.playersState[1].score).toBe(0)
    })
})
