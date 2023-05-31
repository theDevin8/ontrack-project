import './login.css'

const Login = () => {
    return (
        <div className="login">
            <div className="canvas">
                <div className="login-title">Login</div>
                <div className="user-inputs">
                    <h2 className="input-title">Username:</h2>
                    <input type="text" placeholder="Enter Username" className="input" />
                    <h2 className="input-title">Password:</h2>
                    <input type="text" placeholder="Enter Password" className="input" />
                </div>

                <div className='login-b'>Login</div>
                <div className='register-here'>New User?</div>
                
            </div>
        </div>
    )
}

export default Login