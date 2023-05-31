import { useHabitCardContext } from '../hooks/useHabitcardsContext';

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
    return(
        <div className="habitcard-details">
            <h4>{habitcard.title}</h4>
            <p>Description: {habitcard.description}</p>
            <p><strong>Start Date: </strong>{habitcard.startDate}</p>
            <p><strong>End Date: </strong>{habitcard.endDate}</p>
            <p>{habitcard.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default HabitCardDetails