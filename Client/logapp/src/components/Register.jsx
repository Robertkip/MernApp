import { useState, useEffect } from 'react'
import { FaUser, FaLock } from "react-icons/fa";
import './LoginForm.css'
import axios from 'axios'
const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:4000/api/users', {name, email, password})
    .then(res => {console.log(res)})
    .catch(err => {console.log(err)})
}

  return (
    <div className='wrapper'>
    <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type='name' name='name' id='name' className='form-control' placeholder='name' onChange={e => setName(e.target.value)} />
            <FaUser />
        </div>
        <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' className='form-control' placeholder='email' onChange={e => setEmail(e.target.value)} />
            <FaUser />
        </div>
        <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' className='form-control' placeholder='password' />
            <FaLock />
        </div>
        <div className='form-group'>
            <button type='submit' className='btn btn-primary'>Register</button>
        </div>
        <div className="form-group">
            <p>You have an account <a href="./LoginForm.jsx">Login to your Account</a></p>
        </div>
    </form>
    </div>
  )
}

export default Register