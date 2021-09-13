import { useState, useContext } from 'react'
import { MealContext } from './MainF'

const getClearComment = ()=>{
    return{
        name: '',
        text: '',
        note: 0
    }
}

const NewComment = ({idMeal})=>{
    const context = useContext(MealContext)
    const [comment, setComment] = useState(getClearComment());

    const onChangeHandler = event =>{
        setComment ((comment)=>{
            return {...comment, [event.target.name]:event.target.value}
        })
    }

    const onClickHandler = ()=>{
        if(comment.name.trim() === '' || comment.text === '' || comment.note === 0){
            return
        }
        context.addComment(idMeal, comment);
        setComment(getClearComment())     
        
    }

    return (
        <div className="card mt-3 bg-light ">
            <div className="card-body text-start">
                <div className="h4 card-title">New comment</div>
                <div className="mb-3">
                    <label htmlFor="nameText" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        id="nameText"
                        name="name"
                        placeholder="Your Name here"
                        value={comment.name}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="commentText" className="form-label">Comment</label>
                    <textarea
                        className="form-control form-control-sm"
                        id="commentText"
                        rows="3"
                        name="text"
                        value={comment.text}
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Note: </label>
                    <select className="form-select"
                            aria-label="Default select example"
                            name="note"
                            value={comment.note}
                            onChange={onChangeHandler}
                    >
                        <option >Open this select menu</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className='d-flex justify-content-end'>
                <button type="button" className="btn btn-sm btn-success" onClick={onClickHandler}>Add Comment</button>
                </div>
                
            </div>
        </div>
    )
}

export default NewComment