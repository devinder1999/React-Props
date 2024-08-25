import React from 'react'
import propTypes from 'prop-types'

const Typeprops = (props) => {
    const font3={
        color:'Green',
        fontSize:'28px'
    }
  return (
  <>

<h1 style={font3}>This is the example of Props Types with declare a props Types in html tags like this 
    <br/>(propstype.string, propstype.number, etc..)
these method can be Defined the Props Type</h1>
  
  <h1> {props.name},( This is a String )</h1>
    <h1> {props.age},( This is a Number )</h1>
    <h1> {props.city},( This is a String )</h1>
    <h1> {props.phone},( This is a Number )</h1>

  </>
  )
}

/*if We Not Decalare a Types of Props so in Console of Chrome show Errors 
but we use Proptypes in Big Projects this is only for knowledge*/

 Typeprops.propTypes={
    name:propTypes.string,
    age :propTypes.number,
    city:propTypes.string,
    phone:propTypes.number

 }

export default Typeprops