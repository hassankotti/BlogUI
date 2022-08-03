import React from 'react'

const Comment = ({ comment }) => {
  return (
    
    <div className="py-2">
        <div className="flex items-center justify-between">
          <h3 className="my-1 text-lg font-medium text-gray-700">{comment.name}</h3>
          <div className="flex items-center justify-center space-x-2 space-x-reverse">
            <span className="text-xs text-gray-500">{comment.date}</span>
          </div>
        </div>
        <p className="text-base font-normal text-gray-600">{comment.text}</p>
      </div>
  )
}

export default Comment