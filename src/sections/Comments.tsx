import React from 'react'
import CommentForm from '../components/CommentForm'
import Comment from '../components/Comment'

const Comments = ({ comments }) => {
    return (
        <section className='bg-white  dark:bg-heavy-metal-800'>
            <div className='pt-4 sm:pt-6 px-4 md:px-6 lg:px:8 xl:px-10 mx-auto'>
                <span className="border-r-4 border-teal-500  my-4 pr-2 text-xl font-medium uppercase ">
                    التعليقات</span>
            </div>
            <div className="grid-col-1 mx-auto grid space-y-5 divide-y divide-gray-300 ">
                {
                    comments.map((comment, index) => (
                        <Comment comment={comment} key={index} />
                    ))
                }
            </div>
            <CommentForm />
        </section>
    )
}

export default Comments