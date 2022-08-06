import React from 'react'
import SideHeading from './SideHeading'

const Comment = ({ comment }) => {
  return (
    
    <div className="py-4 dark:bg-heavy-metal-800 px-4 md:px-6 lg:px:8 xl:px-10">
        <div className="flex items-center justify-between mt-4">
          <h3 className="my-1 text-lg font-medium text-heavy-metal-400 dark:text-heavy-metal-200">{comment.name}</h3>
          <div className="flex items-center justify-center space-x-2 space-x-reverse">
            <span className="text-xs text-heavy-metal-100">{comment.date}</span>
          </div>
        </div>
        <p className="text-base font-normal text-heavy-metal-300">{comment.text}</p>
      </div>
  )
}

export default Comment