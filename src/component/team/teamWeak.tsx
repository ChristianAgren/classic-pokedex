import * as React from "react";

import {
	normal,
	fire,
	water,
	electric,
	grass,
	ice,
	fighting,
	poison,
	ground,
	flying,
	psychic,
	bug,
	rock,
	ghost,
	dragon,
	dark,
	steel,
	fairy
} from "../css";

import axios from "axios";

interface Props {
	teamTypes: string[];
}
interface State {
	normal: any[];
	fire: any[];
	water: any[];
	electric: any[];
	grass: any[];
	ice: any[];
	fighting: any[];
	poison: any[];
	ground: any[];
	flying: any[];
	psychic: any[];
	bug: any[];
	rock: any[];
	ghost: any[];
	dragon: any[];
	dark: any[];
	steel: any[];
	fairy: any[];
}

export default class TeamWeak extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			normal: [],
			fire: [],
			water: [],
			electric: [],
			grass: [],
			ice: [],
			fighting: [],
			poison: [],
			ground: [],
			flying: [],
			psychic: [],
			bug: [],
			rock: [],
			ghost: [],
			dragon: [],
			dark: [],
			steel: [],
			fairy: []
		};
	}

	componentDidMount() {
		this.filterSupers();
	}

	filterSupers = async () => {
		this.props.teamTypes.forEach(type => this.fetchSuper(type));
	};

	fetchSuper = async (type: string) => {
		const typeRes: any = await axios.get(
			"https://pokeapi.co/api/v2/type/" + type
		);
		const weakList = typeRes.data.damage_relations.double_damage_from;

		weakList.forEach((type: any) => {
			console.log(type.name);
			switch (type.name) {
				case "normal":
					this.setState({ normal: [...this.state.normal, [""]] });
					break;
				case "fire":
					this.setState({ fire: [...this.state.fire, [""]] });
					break;
				case "water":
					this.setState({ water: [...this.state.water, [""]] });
					break;
				case "electric":
					this.setState({ electric: [...this.state.electric, [""]] });
					break;
				case "grass":
					this.setState({ grass: [...this.state.grass, [""]] });
					break;
				case "ice":
					this.setState({ ice: [...this.state.ice, [""]] });
					break;
				case "fighting":
					this.setState({ fighting: [...this.state.fighting, [""]] });
					break;
				case "poison":
					this.setState({ poison: [...this.state.poison, [""]] });
					break;
				case "ground":
					this.setState({ ground: [...this.state.ground, [""]] });
					break;
				case "flying":
					this.setState({ flying: [...this.state.flying, [""]] });
					break;
				case "psychic":
					this.setState({ psychic: [...this.state.psychic, [""]] });
					break;
				case "bug":
					this.setState({ bug: [...this.state.bug, [""]] });
					break;
				case "rock":
					this.setState({ rock: [...this.state.rock, [""]] });
					break;
				case "ghost":
					this.setState({ ghost: [...this.state.ghost, [""]] });
					break;
				case "dragon":
					this.setState({ dragon: [...this.state.dragon, [""]] });
					break;
				case "dark":
					this.setState({ dark: [...this.state.dark, [""]] });
					break;
				case "steel":
					this.setState({ steel: [...this.state.steel, [""]] });
					break;
				case "fairy":
					this.setState({ fairy: [...this.state.fairy, [""]] });
					break;
			}
		});
	};


	generateSupers = () => {
		const weakList: any = [];

		for (let [key, value] of Object.entries(this.state)) {
			switch (key) {
				case "normal":
					if (value.length > 0) {
						weakList.push(
							<div style={measureWrapper}>
								{value.map(() => {
									return <p style={{ ...measureStyle, ...normal }}></p>;
								})}
							</div>
						);
					}
					break;
				case "fire":
					if (value.length > 0) {
						weakList.push(
							<div style={measureWrapper}>
								{value.map(() => {
									return <p style={{ ...measureStyle, ...fire }}></p>;
								})}
							</div>
						);
					}
					break;
				case "water":
					if (value.length > 0) {
						weakList.push(
							<div style={measureWrapper}>
								{value.map(() => {
									return <p style={{ ...measureStyle, ...water }}></p>;
								})}
							</div>
						);
					}
					break;
				case "electric":
					if (value.length > 0) {
						weakList.push(
							<div style={measureWrapper}>
								{value.map(() => {
									return <p style={{ ...measureStyle, ...electric }}></p>;
								})}
							</div>
						);
					}
					break;
				case "grass":
					if (value.length > 0) {
						weakList.push(
							<div style={measureWrapper}>
								{value.map(() => {
									return <p style={{ ...measureStyle, ...grass }}></p>;
								})}
							</div>
						);
					}
					break;
				case "ice":
					if (value.length > 0) {
						weakList.push(
							<div style={measureWrapper}>
								{value.map(() => {
									return <p style={{ ...measureStyle, ...ice }}></p>;
								})}
							</div>
						);
					}
					break;
				case "fighting":
					if (value.length > 0) {
						weakList.push(
							<div style={measureWrapper}>
								{value.map(() => {
									return <p style={{ ...measureStyle, ...fighting }}></p>;
								})}
							</div>
						);
					}
					break;
				case "poison":
					if (value.length > 0) {
						weakList.push(
							<div style={measureWrapper}>
								{value.map(() => {
									return <p style={{ ...measureStyle, ...poison }}></p>;
								})}
							</div>
						);
					}
					break;
				case "ground":
					if (value.length > 0) {
						weakList.push(
							<div style={measureWrapper}>
								{value.map(() => {
									return <p style={{ ...measureStyle, ...ground }}></p>;
								})}
							</div>
						);
					}
					break;
				case "flying":
					if (value.length > 0) {
						weakList.push(
							<div style={measureWrapper}>
								{value.map(() => {
									return <p style={{ ...measureStyle, ...flying }}></p>;
								})}
							</div>
						);
					}
					break;
				case "psychic":
					if (value.length > 0) {
						weakList.push(
							<div style={measureWrapper}>
								{value.map(() => {
									return <p style={{ ...measureStyle, ...psychic }}></p>;
								})}
							</div>
						);
					}
					break;
				case "bug":
					if (value.length > 0) {
						weakList.push(
							<div style={measureWrapper}>
								{value.map(() => {
									return <p style={{ ...measureStyle, ...bug }}></p>;
								})}
							</div>
						);
					}
					break;
				case "rock":
					if (value.length > 0) {
						weakList.push(
							<div style={measureWrapper}>
								{value.map(() => {
									return <p style={{ ...measureStyle, ...rock }}></p>;
								})}
							</div>
						);
					}
					break;
				case "ghost":
					if (value.length > 0) {
						weakList.push(
							<div style={measureWrapper}>
								{value.map(() => {
									return <p style={{ ...measureStyle, ...ghost }}></p>;
								})}
							</div>
						);
					}
					break;
				case "dragon":
					if (value.length > 0) {
						weakList.push(
							<div style={measureWrapper}>
								{value.map(() => {
									return <p style={{ ...measureStyle, ...dragon }}></p>;
								})}
							</div>
						);
					}
					break;
				case "dark":
					if (value.length > 0) {
						weakList.push(
							<div style={measureWrapper}>
								{value.map(() => {
									return <p style={{ ...measureStyle, ...dark }}></p>;
								})}
							</div>
						);
					}
					break;
				case "steel":
					if (value.length > 0) {
						weakList.push(
							<div style={measureWrapper}>
								{value.map(() => {
									return <p style={{ ...measureStyle, ...steel }}></p>;
								})}
							</div>
						);
					}
					break;
				case "fairy":
					if (value.length > 0) {
						weakList.push(
							<div style={measureWrapper}>
								{value.map(() => {
									return <p style={{ ...measureStyle, ...fairy }}></p>;
								})}
							</div>
						);
					}
					break;
			}
		}

		return weakList;
	};

	render() {
		const weaks: any = this.generateSupers();

		return (
			<div style={weakStyle}>
				<h2>Weaknesses</h2>
				<hr />

				<div style={measureList}>{weaks}</div>
			</div>
		);
	}
}
const weakStyle: React.CSSProperties = {
	height: "100%",
	width: "20%"
};

const measureList: React.CSSProperties = {
	display: "flex",
	flexDirection: "column"
};
const measureWrapper: React.CSSProperties = {
	padding: ".5rem",
	margin: ".2rem",

	display: "flex",

	background: "#3338"
};
const measureStyle: React.CSSProperties = {
	width: ".5rem",
	height: "1rem",

	margin: ".2rem"
};
