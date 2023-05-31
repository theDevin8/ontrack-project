import {useEffect, useState} from 'react'
//dashboard testing

// compnents
import HabitCardDetails from '../components/habitcardDetails'
import HabitCardForm from '../components/habitCardForm'
import './test.css'

const Test = () => {
    const [habitcards, sethabitcards] = useState(null)

    useEffect(() => {
        const fetchHabitCards = async () => {
            const response = await fetch('/api/habitcards')
            const json = await response.json()

            if (response.ok){
                sethabitcards(json)
            }
        }
        fetchHabitCards()
    }, [])

    return(
        <div>
            <div className='dashboard'>
                {habitcards && habitcards.map((habitcard) => (
                    <HabitCardDetails key={habitcard._id} habitcard={habitcard} />
                ))}
            </div>
            <HabitCardForm />
        </div>
    )
}
export default Test