
import { Link } from 'react-router-dom'
import piechart from '../../images/pieChart.gif'
import climbing from '../../images/climbing.gif'

import './about.css'
const About = () => {
    return(
        <div className="about-container">
            <h1 className="welcome-message">About</h1>
            <h1 className='welcome-message'><span className='title-name'>{'O(n)Track'}</span></h1>
            <div className="about-box">
                <p className="description">
                    O(n)Track is a powerful tool designed to help you build and maintain good habits, 
                    increase productivity, and achieve your goals. With O(n)Track, you can easily set 
                    and track your progress towards your goals and access a range of resources and tools 
                    to support your habit-building journey.
                </p>
                <img className='about-gif' src={piechart} />
            </div>
            <div className='about-box'>
                <img className='about-gif2' src={climbing}></img>
                <p className='description2'>
                    Whether you're looking to develop healthy habits, improve your mental well-being, 
                    or boost your career success, O(n)Track has everything you need to stay on track and 
                    achieve your objectives. Our web application is designed to be intuitive, easy to use, 
                    and fully customizable to your unique needs and preferences.
                </p>
            </div>
            <h1 className='title'><span className='title-name'>Key Features</span></h1>
            <div className= "about-box">
            <p className='description3'>Some of the key features of O(n)Track include:</p>
                <ul className='about-list'>
                    <li className='description'> Goal-setting and tracking tools to help you stay focused and motivated</li>
                    <li className='description'>Customizable reminders and notifications to keep you on track</li>
                    <li className='description'>Personalized habit-building plans and resources tailored to your specific goals and needs</li>
                    <li className='description'>Data tracking and analytics to help you monitor your porgress and identify areas for improvement</li>
                </ul>
            </div>
            <div className='join-ontrack'>
                <Link to='/register'>
                <div className="register-button">Sign Up</div>
                </Link>
                <Link to='/login' className='login-link'>
                    <div className='signIn'>Returning User?</div>
                </Link>
                
            </div>
        </div>
    )
}

export default About