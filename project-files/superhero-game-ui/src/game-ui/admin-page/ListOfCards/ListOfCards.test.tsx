import { render } from '@testing-library/react';
import * as React from 'react';
import { ListOfCards } from "./";

const mockCards = [
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
];

describe('ListOfCards', () => {
    it('should be properly rendered with proper count of mocked cards data.', () => {
        const { getByTestId } = render(<ListOfCards {...mockCards} />);
        expect(getByTestId('list-of-cards').children.length).toBe(21)
    })
})
