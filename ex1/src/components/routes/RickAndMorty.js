import axios from "axios";
import { useState, useEffect } from "react";

// Make changes because dont make a pull request

export const RickAndMorty = () => {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axios.get(
					"https://rickandmortyapi.com/api/character/"
				);

				setCharacters(data.results);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<h1>RickAndMorty</h1>
			<div className="RickAndMortyContainer">
				{characters.map((character) => (
					<div className="RickAndMortyCharacter" key={character.id}>
						<img src={character.image} alt={character.name} />
						<h2>{character.name}</h2>
					</div>
				))}
			</div>
		</div>
	);
};

export default RickAndMorty;
