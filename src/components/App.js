
import React ,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [user,setUser] = useState({ name:"", email:"", password:""})
  function handleSubmit(event) {
      event.preventDefault()
    console.log(user)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" onChange={(event) => setUser({ ...user, name: event.target.value })} /><br/>
        <label htmlFor="email">Email</label>
        <input type="email" onChange={(event)=> setUser({...user, email: event.target.value})}/><br/>
        <label htmlFor="password">Password</label>
        <input type="password" onChange={(event)=> setUser({...user, password: event.target.value})}/><br/>
      </form>
      <button  onClick={handleSubmit} type="submit">Submit</button>
    </div>
  )
}

export default App
