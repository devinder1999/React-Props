import React from 'react'
import B from './B'


const A = (props) => {

    const font={
        color:'yellow'
    }
    const font2={
        color:'red',
        fontSize:'28px'
    }
    const font3={
        color:'purple',
        fontSize:'28px'
    }
  return (
    <>
<h1 style={font2}>This is the example of Props with declare a props in html tags with like this <br/>(props.name, props.age, props.city)
these types of props</h1>

    <h1 style={font}>This is From First Component</h1>
    <h1> {props.name} </h1>
    <h1> {props.age} </h1>
    <h1> {props.city} </h1>
    <h1> {props.phone} </h1>

    <div>
        <B
         name="Ankush Kumar"
         age={25}
         city="Ferozepur City"
         phone={9041316690}/>
    </div>

    <h1 style={font3}>This is the example of Props with declare a props in html tags without declare a props <br/>(props.name, props.age, props.city)
         these types of props</h1>
    </>
  )
}

export default A