import { useEffect, useState } from 'react';
import { PokemonTag } from './PokemonTag';



export const PokemonList = () => {

    const [allPokemons,setAllPokemons] = useState([])
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=30')

    const getAllPokemons = async () =>{
        const res = await fetch(loadMore)
        const data = await res.json()

        setLoadMore(data.next)

        function createPokemonObject (result){
            result.forEach(async (pokemon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()

                setAllPokemons(currentList => [...currentList, data])

                // await console.log(allPokemons)
            })
        }

        createPokemonObject(data.results)  
    }

    
    useEffect(() => {
        getAllPokemons()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="app-container">
            <h1 className="text-center pokemon-title">Encuentra tu pokemon <br/>favorito</h1>
            <div className="pokemon-container">
                <div className="all-container">
                    {allPokemons.map((pokemon, index) => 
                        <PokemonTag
                            key={index}
                            id={pokemon.id}
                            image={pokemon.sprites.other.dream_world.front_default}
                            name={pokemon.name}
                            type={pokemon.types[0].type.name}
                        />
                    )}
                </div>
                <button className="load-more" onClick={() =>getAllPokemons()}>Cargar más</button>
            </div>
        </div>
    )

}

