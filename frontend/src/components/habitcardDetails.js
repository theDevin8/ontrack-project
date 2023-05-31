
const HabitCardDetails = ({ habitcard }) => {
    return(
        <div className="habitcard-details">
            <h4>{habitcard.title}</h4>
            <p>Description: {habitcard.description}</p>
            <p><strong>Start Date: </strong>{habitcard.startDate}</p>
            <p><strong>End Date: </strong>{habitcard.endDate}</p>
            <p>{habitcard.createdAt}</p>
        </div>
    )
}

export default HabitCardDetails