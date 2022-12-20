import { Superhero } from "../../../superhero-game/superhero.interface";
import * as React from "react";

import styled from 'styled-components';

export const Ul = styled('ul')`
	display: flex;
	flex-direction: column;
	list-style: none;
	padding: 0;
	margin: 0;
	
	li {
		background: #ccc;
		color: #333;
		display: flex;
		font-weight: bold;
    flex-direction: column;
    list-style: none;
    margin-top: 4px;
    padding: 2px 0;
		
		&:nth-of-type(even) {
			background: #eee;
		}
		
		div {
			display: flex;
			font-weight: normal;
      padding: 6px 8px;
    }
	}
`;

export const ListOfCards = (cards: Superhero[]) => (
		<Ul data-testid="list-of-cards">
			{cards.map((item, index) => (
				<li key={item.name + '-' + index}>
					<div>name: {item.name}</div>
					<div>attack: {item.attackScore}</div>
					<div>defense: {item.defenseScore}</div>
				</li>
			))}
		</Ul>
	);
