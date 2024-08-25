import React from 'react'

const Parameterprops = ({name,age,city,phone}) => {

    const font3={
        color:'purple',
        fontSize:'28px'
    }

  return (
    <>

<h1 style={font3}>This is the example of Props with declare a props in html tags without declare a props <br/>(props.name, props.age, props.city)
these types of props</h1>

    <h1> {name} </h1>
    <h1> {age} </h1>
    <h1> {city} </h1>
    <h1> {phone} </h1>
    </>
  )
}

export default Parameterprops