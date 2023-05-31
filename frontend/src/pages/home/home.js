import React from 'react';
import './home.css';
import med from '../../images/meditation.png';
import read from '../../images/reading.png';
import run from '../../images/run.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <h1 className='welcome-message'>Welcome to</h1>
            <h1 className='welcome-message'><span className='title-name'>{'O(n)Track'}</span></h1>
            <div className='adver-container'>
                <div className='adver-card'>
                    <img className= 'adver-img' src={med} alt='Meditation Image'></img>
                    <p className='adver-description'> 
                        Find inner peace and improve your mental well-being with O(n)Track. 
                        Our application offers a range of tools and resources to help you reduce stress, improve your mood, and cultivate a positive mindset.
                    </p>
                </div>
                <div className='adver-card'>
                    <img className= 'adver-img' src={read} alt='Reading Image'></img>
                    <p className='adver-description'> 
                        Reach new heights with O(n)Track. Our application helps you set and achieve your goals, 
                        so you can conquer any challenge and achieve your dreams.
                    </p>
                </div>
                <div className='adver-card'>
                    <img className= 'adver-img' src={run} alt='Running Image'></img>
                    <p className='adver-description'> 
                        Make every day count with O(n)Track. Our app helps you build healthy habits, 
                        stay motivated, and track your progress towards your fitness goals.
                    </p>
                </div>
            </div>

            <div className='adver-summary'>
                <p className='description-summary'>
                    O(n)Track is your all-in-one tool for building and maintaining good habits, increasing productivity, 
                    and achieving your goals. Here are some of the key features of our app:
                </p>
                <ui>
                    <li className='description-summary'>
                        Habit-building plans: Browse our extensive library of habit-building plans, tailored to your unique needs and goals. 
                        Whether you're looking to improve your health, manage your time better, or boost your career success, we've got you covered.
                    </li>
                    <li className='description-summary'>
                        Data tracking and analytics: Monitor your progress towards your goals with our advanced data tracking and analytics tools. 
                        Our application allows you to easily track your habits, monitor your progress, and identify areas for improvement.
                    </li>
                </ui>
                <p className='description-summary'>
                    Ready to get started? Sign up now to unlock the full potential of O(n)Track, 
                    and start building the habits that will help you achieve your dreams.
                </p>
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

export default Home;