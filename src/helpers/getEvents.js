export function getEvents(e){
    if(e.available > 0){
      const events = e.items.map(event => event.name).slice(0,3);
      return events
    }else{
      return false
    }
    
  }