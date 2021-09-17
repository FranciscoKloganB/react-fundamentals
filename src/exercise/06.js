// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

const UsernameForm = ({onSubmitUsername}) => {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Accept the `event` as an argument and call `event.preventDefault()` to prevent the default behaviors
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  // 🐨 Get the value from the username input (using whichever method you prefer from the options mentioned in instructions)
  // 🐨 Call `onSubmitUsername` with the value of the input
  // 🐨 Add the onSubmit handler to the <form> below
  // 🐨 Make sure to associate the label to the input to do so, set the value of 'htmlFor' prop of the label to the id of input

  // const inputLabelEl = <label htmlFor="username">Username:</label>
  // const inputEl = <input id="username" type="text" />
  // const handleSubmit = event => {
  //   event.preventDefault()
  //   onSubmitUsername(event.target.elements.username.value)
  // }

  // 1. 💯 access the username value using react ref objects
  // const usernameRef = React.useRef('');
  // const inputLabelEl = <label htmlFor="username">Username:</label>
  // const inputEl = <input type="text" id="username" ref={usernameRef} />
  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   onSubmitUsername(usernameRef.current.value)
  // }

  // 2.💯 Validate lower-case
  // const handleSubmit = event => {
  //   event.preventDefault()
  //   onSubmitUsername(event.target.elements.username.value)
  // }
  //
  // const handleChange = event => {
  //   const inputValue = event.target.value
  //   const validValue = inputValue === inputValue.toLowerCase()
  //   setErrorMessage(
  //     validValue ? '' : 'Username must contain only lower case characters.',
  //   )
  // }
  //
  // const [error, setError] = React.useState('')
  //
  // const inputLabelEl = <label htmlFor="username">Username:</label>
  // const inputEl = <input type="text" id="username" onChange={handleChange} />
  //
  // const setErrorMessage = value => setError(value)

  // 3. 💯 Control the input value (like in Vue js using the value={something})
  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(sanitizedInputValue)
  }

  const handleChange = event => {
    sanitizeInputValue(event.target.value)
  }


  const [sanitizedInputValue, setInputValue] = React.useState('')
  
  const inputLabelEl = <label htmlFor="username">Username:</label>
  const inputEl = <input type="text" id="username" value={sanitizedInputValue} onChange={handleChange} />
  
  const sanitizeInputValue = value => setInputValue(value.toLowerCase())

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {inputLabelEl}
        {inputEl}
      </div>
      <button type="submit">Submit</button>
      {/* 
      Use snippet below to use with exercise (1) and (3)
        <button type="submit">Submit</button>
      Use snippet below to use with exercise (2)
        <p style={{color: 'red'}}>error</p>
        <button type="submit" disabled={Boolean(error)}>Submit</button>
      */}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
