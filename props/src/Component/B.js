import React from 'react'

export const B = (props) => {

        const font={
         color:'aqua' 
        }
      
       

      
      
  return (
    <>
<h1 style={font}> This is From Second Component</h1>
    <h1> {props.name} </h1>
    <h1> {props.age} </h1>
    <h1> {props.city} </h1>
    <h1> {props.phone} </h1>
    
    </>
  )
}
export default B
