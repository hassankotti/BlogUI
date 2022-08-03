import React from 'react'
import CommentForm from '../components/CommentForm'
import Comment from '../components/Comment'

const Comments = ({ comments }) => {
    return (
        <div>
            <div className="grid-col-1 mx-auto grid space-y-5 divide-y divide-gray-300">
                {
                    comments.map((comment, index) => (
                        <Comment comment={comment} key={index} />
                    ))
                }
            </div>

            <CommentForm />
        </div>
    )
}

export default Comments