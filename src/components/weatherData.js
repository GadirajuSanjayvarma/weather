import React from 'react'

const Weatherdata = ({weather,city}) => {
const {temp , humidity , pressure }=weather

return(
<div >
<p >Weather forecast for <span >{city}</span></p>
  <div >
    <span >
      <p >Temperature</p>
      <p >{temp}</p>
    </span>
    <span>
      <p >Humidity</p>
      <p >{humidity}</p>
    </span>
    <span >
      <p >Pressure</p>
      <p >{pressure}</p>
    </span>
  </div>
</div>

 )

}



export default Weatherdata;