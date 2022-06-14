export const getCharacterName = async (name) => {

    const url = `https://gateway.marvel.com:443/v1/public/characters?&nameStartsWith=${name}&ts=1651339669&apikey=de440ddf905c6a743dd1476144f4befd&hash=3de936b1f9e696d7abeeff109dc9e002`
  
    const getData = await fetch(url)
  
    const response = await getData.json()
    const {data} = response;
    const resultados = data.results;
    
    return resultados;
  
  }