import React from 'react'
//import ReactDOM from 'react-dom'


/* const App =(props) =>{
  const {notes} = props
  const result = notes.map(note => <li key={note.id}>{note.content}</li>)
  const result1 = notes.map(note => note.content)
  console.log(result1)
  return(
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
        <li key={note.id}>{note.content}</li>
        )}
        
      </ul>
    </div>
  )
} */

const App = ({ notes }) =>{
  return(
    <div>
      <h1>Notes</h1>
      <ul>
        {
          notes.map(note =>
            <li key={note.id}>
              {note.content}
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default App;
