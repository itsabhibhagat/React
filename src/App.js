import React, { useState } from "react";
import data from "./Data";
import Tours from "./Components/Tours";

const App = ()=> {

  const [tours,setTours]=useState(data);

  function removeTour(id){
    const newTours=tours.filter(tour => tour.id !== id);
    setTours(newTours); 
  }
 
  if(tours.length === 0 ){
    return (
      <div className="refresh">
        <h2 className="text-refresh">No Tours Left</h2>
        <button className="refresh-button" onClick={()=>setTours(data)}>Refresh</button>
      </div>
    )
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

//exporting the app component

export default App;
