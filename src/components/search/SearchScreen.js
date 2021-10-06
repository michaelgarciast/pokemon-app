import React, {  useState } from 'react';
import  {PokemonList}  from '../allpokemons/PokemonList';
// import { PokemonTag } from '../allpokemons/PokemonTag';



export const SearchScreen = () => {

    const [inputSearch, setInputSearch] = useState("")

    const [pokemonFiltered, setPokemonFiltered] = useState([])

    const SearchPokemons = async (text) =>{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${text}`)
        const data = await res.json()
        setPokemonFiltered([data]);
    }

    const handleSearch = ()=>{
        if(inputSearch === ""){
            alert('llenar campo search');
        }else{
            SearchPokemons(inputSearch);
        }
        
    }
    return (
        <div className="row">  
            <div className="col-md-6">
                <input 
                    type="text"
                    placeholder="Encuentra tu pokemon"
                    className="form-control"
                    onChange={(e)=>{
                        // console.log(e);
                        setInputSearch(e.target.value);
                    }}
                    value={inputSearch}
                />
                <button 
                    onClick={handleSearch}
                    className="btn m-1 btn-block btn-outline-primary"
                >
                Buscar...
                </button>
            </div>
            <div className="col-md-12">
                {pokemonFiltered.map(index => (
                    <PokemonList
                        key={index.id}
                        {...index}
                    />
                    ))
            
                }
            </div>
        </div>
    )
}


