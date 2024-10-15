import "./pokemonItem.css"
import { colours } from "../../data/colours"

export default function PokemonItem({ pokemon }) {
    return (
        <div className="pokemon-card" style={{
            backgroundColor: `${pokemon.color}`
        }}>
            <img src={pokemon.imageUrl} alt={pokemon.name} width={250} />
            <h1>{pokemon.name}</h1>

            <div className="types-container">
                {pokemon.types.map((item, index) => (
                    <span
                        key={index}
                        className="type-badge"
                        style={{
                            backgroundColor: colours[item.toLowerCase()]
                        }}
                    >
                        {item}
                    </span>
                ))}
            </div>

            <p className="description">{pokemon.description}</p>
        </div>
    )
}