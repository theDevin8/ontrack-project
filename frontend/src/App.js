import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

//pages & components
import Navabar from './components/navbar/navbar'
import Home from './pages/home/home'
import Login from './pages/login/login'
import About from './pages/about/about'
import Dashboard from './pages/test'
import Register from './pages/register/register'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navabar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
