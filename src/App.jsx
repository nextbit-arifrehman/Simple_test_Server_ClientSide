
import './App.css'
import User from './Componet/User';
const userPromise = fetch('http://localhost:3000/user')
.then(res => res.json())


function App() {
 

  return (
    <>
     <h1>User Mangement System</h1>
      <User userPromise={userPromise}></User>
    </>
  )
}

export default App
