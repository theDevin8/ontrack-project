import { useEffect } from 'react'
import { useHabitCardContext } from '../hooks/useHabitcardsContext'
//dashboard testing

// compnents
import HabitCardDetails from '../components/habitcardDetails'
import HabitCardForm from '../components/habitCardForm'
import './test.css'

const Test = () => {
    const { habitcards, dispatch} = useHabitCardContext() 
    

    useEffect(() => {
        const fetchHabitCards = async () => {
            const response = await fetch('/api/habitcards')
            const json = await response.json()

            if (response.ok){
               dispatch({type: 'SET_HABITCARDS', payload: json})
            }
        }
        fetchHabitCards()
    }, [dispatch])

    return(
        <div>
            <h1 className='welcome-message'>Dashboard</h1>
            <input type='text' className='input-search' placeholder='Search Habit Card' />
            <div className='dashboard'>
                <div>
                    {habitcards && habitcards.map((habitcard) => (
                        <HabitCardDetails key={habitcard._id} habitcard={habitcard} />
                    ))}
                </div>
                <HabitCardForm />
            </div>
        </div>
    )
}
export default Test