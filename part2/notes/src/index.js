import ReactDOM from 'react-dom/client'
import App from './App'
import axios from 'axios'

const promise = axios.get('http://localhost:3001/notes')
console.log(promise)

const promise2 = axios.get('http://localhost:3001/footbar')
console.log(promise2)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App notes={notes} />
)