import React from 'react'
import { Heroe } from './Heroe';
import { useEffect,useState } from 'react';
export const Favoritos = () => {
    let heroesFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const [status,setStatus] = useState(false);

   useEffect(()=>{
    console.log('me renderice again')
   },[status])
    const handleOnClick = (e) => {
        setStatus(!status)
        if(e.fav){
            heroesFavoritos = heroesFavoritos.filter(heroe => heroe.name !== e.name);
            localStorage.setItem('favoritos',JSON.stringify(heroesFavoritos));
        }else{
            heroesFavoritos = [...heroesFavoritos,e]
            localStorage.setItem('favoritos',JSON.stringify(heroesFavoritos));
        }
        
        
    }
  return (
    <div className='heroes'>
    { heroesFavoritos.length != 0 ?
        heroesFavoritos.map((heroe) => {
            return <Heroe key={heroe.id} heroe={heroe} handleOnClick ={handleOnClick}/>
        }): <div className='alert alert-danger error'> No hay heroes favoritos, agrega unos!</div> 
    }
    </div>
  )
}
