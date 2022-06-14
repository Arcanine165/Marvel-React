import React, { memo, useState } from 'react'

export const Heroe = React.memo(({heroe,handleOnClick}) => {
   console.log(heroe)
    const handleSubmit = ()=> {
        handleOnClick(heroe)
    }
    
  return (
    <div className='card' style={{width: "18rem"}}>
        <img className="card-img-top" src={heroe.img} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title" >{heroe.name}</h5>
        </div>
        {heroe.events && heroe.events.map(event => {
            return <p>{event}</p>
        })}
        {!heroe.fav ? <button className='btn btn-primary' onClick={handleSubmit}>Agregar A favoritos</button> : <button className='btn btn-danger' onClick={handleSubmit}>Eliminar favoritos</button> }
    </div>
  )
})
