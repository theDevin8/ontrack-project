import { useState } from 'react'

const HabitCardForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const habitcard = {title, description, startDate, endDate}

        const response = await fetch('/api/habitcards', {
            method: 'POST',
            body: JSON.stringify(habitcard),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setTitle('')
            setDescription('')
            setStartDate(null)
            setEndDate(null)
            setError(null)
            console.log('new habit card added', json)
        }
    }

    return(
        <form className='createHabitCard' onSubmit={handleSubmit}>
            <h3>Add a new Habit Card</h3>

            <label>Habit Card Title:</label>
            <input type='text' onChange={(e) => setTitle(e.target.value)} value={title} />

            <label>Habit Card Description:</label>
            <input type='text' onChange={(e) => setDescription(e.target.value)} value={description} />

            <label>Habit Card Start Date:</label>
            <input type='date' onChange={(e) => setStartDate(e.target.value)} value={startDate} />

            <label>Habit Card End Date:</label>
            <input type='date' onChange={(e) => setEndDate(e.target.value)} value={endDate} />

            <button>Add Habit Card</button>

        </form>
    )
}
export default HabitCardForm