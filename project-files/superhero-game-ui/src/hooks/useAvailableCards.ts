import { useMemo, useState } from "react";
import { Superhero } from "../superhero-game/superhero.interface";

export const useAvailableCards = () => {
	const [data, setData] = useState<Superhero[]>([]);

	useMemo(() => {
			fetch('http://localhost:3000/api/superheroes').then(res => {
				if(res.ok) {
					return res.json()
				}
				throw res
			}).then(data => setData(data)).catch(err => {
				console.log("Error fetching data: ", err)
			})
	}, []);

	return data;
};