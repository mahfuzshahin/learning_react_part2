import ReactDOM from 'react-dom'
import App from './App'

const notes = [
  {
    id: 1,
  content: 'HTML is easy'
  },
  {
    id: 2,
  content: 'HTML is easy'
  },
  {
    id: 3,
  content: 'HTML is easy'
  }
]
ReactDOM.render(
    <App notes={notes} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

