import { useHabitCardContext } from '../hooks/useHabitcardsContext';

import formatDistanceToNow  from 'date-fns/formatDistanceToNow'

const HabitCardDetails = ({ habitcard }) => {
    const { dispatch } = useHabitCardContext()
    const handleClick = async () => {
        const response = await fetch('/api/habitcards/' + habitcard._id, {
            method: 'DELETE'
        })
        const json = await response.json()
        if(response.ok){
            dispatch({type: 'DELETE_HABITCARD', payload: json})
        }
    }
    const formatDate = (date) => {
        const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
        return new Date(date).toLocaleDateString(undefined, options);
    };

    return(
        <div className="habitcard-details">
            <h4>{habitcard.title}</h4>
            <p>Description: {habitcard.description}</p>
            <p><strong>Start Date: </strong>{formatDate(habitcard.startDate)}</p>
            <p><strong>End Date: </strong>{formatDate(habitcard.endDate)}</p>
            <p>{formatDistanceToNow(new Date(habitcard.createdAt), { addSuffix: true})}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default HabitCardDetails