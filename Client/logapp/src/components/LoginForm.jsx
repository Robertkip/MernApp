import { useState, useEffect } from 'react'
import { FaUser, FaLock } from "react-icons/fa";
import './LoginForm.css'
import axios from 'axios'
const LoginForm = () => {
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
                <label>
                <input type="checkbox" onChange={e => setPassword(e.target.value)}/>Remember me</label>
                <a href="#" >Forget Password</a>
            </div>
            <div className='form-group'>
                <button type='submit'>Login</button>
            </div>
            <div className="form-group">
                <p>Don't have account <a href="register">Create an account</a></p>
            </div>
        </form>
        </div>

  );
}

export default LoginForm