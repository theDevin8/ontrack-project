import { Link } from 'react-router-dom'
import './navbar.css'

const Navabar = () => {
    return(
        <header>
            <div className="container">
                <h1 className='name-title'>O(n)Track</h1>
                <Link to='/' className='nav-tabs'>
                    <h1>Home</h1>
                </Link>
                <Link to='/about' className='nav-tabs'>
                    <h1>About</h1>
                </Link>
                <Link to='/register' className='nav-tabs'>
                    <h1>Register</h1>
                </Link>
                <Link to='/login' className='nav-tabs'>
                    <h1>Login</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navabar