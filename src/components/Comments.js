import Comment from './Comment'

const Comments = ({comments})=>{
    return(
        <ul className = 'list-unstyled'>
            {
                comments.map(comment =>(
                    <li className = 'mb-1 text-start' key ={comment.id}>
                        {<Comment comment = {comment} />}
                    </li>
                ))
            }

        </ul>
    )
}

export default Comments