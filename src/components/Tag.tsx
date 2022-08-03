import React from 'react'

const Tag = ({tag}) => {
  return (
      <div className="px-6 bg-gray-200 rounded-full py-2 text-base leading-7 text-gray-400">
          #{tag}
      </div>
  )
}

export default Tag