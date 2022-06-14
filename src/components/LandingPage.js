import React, { useEffect, useState } from 'react'
import { getCharacterName } from '../helpers/getCharacters';
import { useForm } from '../hooks/useForm'
import { Heroes } from './Heroes';
import { removeTrailingSlash } from '../helpers/removeTrailStrings';
import { getEvents } from '../helpers/getEvents';

export const LandingPage = () => {
    let heroesFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const [heroes, setHeroes] = useState([]);
    const [values,handleInputChange,reset] = useForm({
        input:'wolverine'
    });
    
    const [submit, setSubmit] = useState(false);
    const handleOnSubmit = (e) => {
        e.preventDefault();
        setSubmit(!submit);
    }

    useEffect(
        ()=>{
           async function getCharacterName(name ="wolverine"){

            const url = `https://gateway.marvel.com:443/v1/public/characters?&nameStartsWith=${name}&ts=1651339669&apikey=de440ddf905c6a743dd1476144f4befd&hash=3de936b1f9e696d7abeeff109dc9e002`
          
            const getData = await fetch(url)
          
            const response = await getData.json()
            const {data} = response;
            const resultados = data.results;
            
            setHeroes(resultados.map((heroe) => {
                return {
                    name: heroe.name,
                    img:removeTrailingSlash(`${heroe.thumbnail.path}.${heroe.thumbnail.extension}`),
                    events:getEvents(heroe.events),
                    id:heroe.id,
                    fav:heroesFavoritos.some(hero => hero.name === heroe.name)
                }
            }))
            

        }
        getCharacterName(values.input)
       
    },
    [submit])
    console.log(heroes)
  return (
    <div>
        <form id="formulario" onSubmit={handleOnSubmit}>
            <input className="form-control" type="text" placeholder="Busca tu heroe favorito" id="searchBar" onChange={handleInputChange} value={values.input} name="input"/>
            <button className="btn btn-primary" type="submit" id="buscar">Buscar</button>
        </form>
        <Heroes heroes = {heroes}/>
    </div>
    
  )
}
