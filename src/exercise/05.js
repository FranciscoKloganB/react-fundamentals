// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

// const smallBox = <div className="box box--small" style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}> small lightblue box </div>
// const mediumBox = <div className="box box--medium" style={{backgroundColor: 'pink', fontStyle: 'italic'}}> medium pink box </div>
// const largeBox = <div className="box box--large" style={{backgroundColor: 'orange', fontStyle: 'italic'}}> large orange box</div>

// 1. 💯 Create a custom component
// 2. 💯 accept a size prop to encapsulate styling

const Box = ({size, className = '', style = {}, ...props}) => {
  const boxSize = size ? `box--${size}` : ''
  const classes = `box ${boxSize} ${className}`
  const styles = {fontStyle: 'italic', ...style}
  return <div className={classes} style={styles} {...props} />
}

const smallBox = <Box size="small" style={{backgroundColor: 'lightblue'}}> small lightblue box </Box>
const mediumBox = <Box size="medium" style={{backgroundColor: 'pink'}}> medium pink box </Box>
const largeBox = <Box size="large" style={{backgroundColor: 'orange'}}> large orange box</Box>


function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
