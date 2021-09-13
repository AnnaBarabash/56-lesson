const Comment = ({comment}) =>{
    return(
        <div className = 'card'>
            <div className = 'card-body'>
            <h4 className = 'card-title'>{comment.name}</h4>
            <p className = 'card-text'>{comment.text}</p>
            <p className = 'card-text'>Note: {comment.note}</p>
            </div>
        </div>
    )
}

export default Comment