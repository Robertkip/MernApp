import { FaUser, FaLock } from "react-icons/fa";
import './LoginForm.css'

const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action=''>
            <h1>Login</h1>
            <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' id='email' className='form-control' placeholder='email' />
                <FaUser />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' id='password' className='form-control' placeholder='password' />
                <FaLock />
            </div>
            <div className='form-group'>
                <label><input type="checkbox"/>Remember me</label>
                <a href="#" >Forget Password</a>
            </div>
            <div className='form-group'>
                <button type='submit' className='btn btn-primary'>Login</button>
            </div>
            <div className="form-group">
                <p>Don't have account <a href="#">Create an account</a></p>
            </div>
        </form>
        </div>
  )
}

export default LoginForm