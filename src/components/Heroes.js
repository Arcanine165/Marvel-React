import React, { useEffect, useState } from 'react'
import { Heroe } from './Heroe'

export const Heroes = React.memo(({heroes}) => {
    let heroesFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const [status,setStatus] = useState(false);

   useEffect(()=>{
    console.log('me renderice again')
   },[status])
    const handleOnClick = (e) => {
        setStatus(!status)
        
        if(e.fav){
            e.fav = !e.fav;
            heroesFavoritos = heroesFavoritos.filter(heroe => heroe.name !== e.name);
            localStorage.setItem('favoritos',JSON.stringify(heroesFavoritos));
        }else{
            e.fav = !e.fav;
            heroesFavoritos = [...heroesFavoritos,e]
            localStorage.setItem('favoritos',JSON.stringify(heroesFavoritos));
        }
        
        
    }
  return (
    <div className='heroes'>
        {
            heroes.map((heroe) => {
                return <Heroe key={heroe.id} heroe={heroe} handleOnClick ={handleOnClick}/>
            })
        }
    </div>
  )
})
