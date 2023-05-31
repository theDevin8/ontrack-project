import './register.css'

const Register = () => {
    return(
        <div className="register">
            <div className="canvas">
                <div className="register-title">Register</div>
                <div className="user-inputs">
                    <h2 className="input-title">Username:</h2>
                    <input type="text" placeholder="Enter Username" className="input"/>
                    <h2 className="input-title">Password:</h2>
                    <input type="text" placeholder="Enter Password" className="input" />
                    <h2 className="input-title">Email:</h2>
                    <input type="text" placeholder="youremail@gmail.com" className="input"/>
                    <h2 className="input-title">Phone Number:</h2>
                    <input type="text" placeholder="Enter Phone Number" className="input"/>
                </div>
                
                <div className='register-b'>Register</div>
                <div className='register-here'>Returning User?</div>
            </div>
        </div>
    )
}

export default Register