import { useState } from 'react';
import { useHabitCardContext } from '../hooks/useHabitcardsContext';

const HabitCardForm = () => {
    const { dispatch } = useHabitCardContext()

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([])
    const handleSubmit = async (e) => {
        e.preventDefault();
        const habitcard = { title, description, startDate, endDate };

        const response = await fetch('/api/habitcards', {
            method: 'POST',
            body: JSON.stringify(habitcard),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setTitle('');
            setDescription('');
            setStartDate(null);
            setEndDate(null);
            setError(null);
            setEmptyFields([])
            console.log('new habit card added', json);
            dispatch({type: 'CREATE_HABITCARD', payload: json})
        }
    };

    const handleAddCardClick = () => {
        const submitButton = document.getElementById('submit-button');
        if (submitButton) {
            submitButton.click();
        }
    };

    return (
        <form className='createHabitCard' onSubmit={handleSubmit}>
            <h3>Add a new Habit Card</h3>

            <label>Habit Card Title:</label>
            <input
                type='text'
                className='input'
                placeholder='Enter card title'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label>Habit Card Description:</label>
            <input
                type='text'
                className='input'
                placeholder='Enter card description (optional)'
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />

            <label>Habit Card Start Date:</label>
            <input
                type='date'
                className='input'
                onChange={(e) => setStartDate(e.target.value)}
                value={startDate}
            />

            <label>Habit Card End Date:</label>
            <input
                type='date'
                className='input'
                onChange={(e) => setEndDate(e.target.value)}
                value={endDate}
            />

            <button id='submit-button' type='submit' style={{ display: 'none' }} />

            <div className='insert-card' onClick={handleAddCardClick}>
                Add Habit Card
            </div>
            {error && <div className='error'>{error}</div>}
        </form>
    );
};

export default HabitCardForm;
