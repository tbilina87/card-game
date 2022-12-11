import {render, screen} from "@testing-library/react";
import * as React from "react";
import {GameBoardPage} from "./game-board.page";

describe('GameBoard page test', () => {
    it('Renders superhero game board correctly', () => {
        render(<GameBoardPage />)
        expect(screen.getByTestId('card-deck-1')).toBeInTheDocument()
        expect(screen.getByTestId('card-deck-2')).toBeInTheDocument()
        expect(screen.getAllByTestId('superhero-card').length).toBe(20)
    })
})
