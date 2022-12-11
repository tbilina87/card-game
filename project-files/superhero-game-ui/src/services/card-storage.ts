import {Superhero} from "../superhero-game/superhero.interface";

export const getAvailableCards = (): Superhero[] => {
    return [
        {name: 'Austere Avocado', attackScore: 6, defenseScore: 10},
        {name: 'Brave Banana', attackScore: 1, defenseScore: 2},
        {name: 'Cheery Cherry', attackScore: 5, defenseScore: 7},
        {name: 'Dark Donkey', attackScore: 10, defenseScore: 9},
        {name: 'Eerie Eggplant', attackScore: 3, defenseScore: 3},
        {name: 'Fascinating Fig', attackScore: 7, defenseScore: 4},
        {name: 'Glorious Guava', attackScore: 2, defenseScore: 6},
        {name: 'Hopping Hound', attackScore: 9, defenseScore: 8},
        {name: 'Icy Ice', attackScore: 10, defenseScore: 4},
        {name: 'Jiggly Jiggles', attackScore: 2, defenseScore: 5},
        {name: 'Cute Kiwi', attackScore: 8, defenseScore: 1},
        {name: 'Ludicrous Llama', attackScore: 3, defenseScore: 4},
        {name: 'Mighty Mango', attackScore: 4, defenseScore: 8},
        {name: 'Notorious Nut', attackScore: 6, defenseScore: 2},
        {name: 'Omnipotent Orange', attackScore: 8, defenseScore: 7},
        {name: 'Prancing Pumpkin', attackScore: 7, defenseScore: 9},
        {name: 'Quiet Quesadilla', attackScore: 5, defenseScore: 6},
        {name: 'Raving Raspberry', attackScore: 1, defenseScore: 3},
        {name: 'Salient Sausage', attackScore: 10, defenseScore: 10},
        {name: 'Trolling Troll', attackScore: 4, defenseScore: 5},
        {name: 'Valiant Vanilla', attackScore: 9, defenseScore: 1}
    ]
}
