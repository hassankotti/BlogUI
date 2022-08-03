import React from 'react'
import Tag from '../components/Tag'
const Tags = ({ tags }) => {
    return (
        <div className='flex items-center justify-between py-2.5 border-t border-b w-full '>
            <div className="flex items-center justify-start space-x-2 space-x-reverse">
                {
                    tags.map((tag, index) => (
                        <Tag tag={tag} key={index} />
                    ))
                }
            </div>
            <div>

            </div>
        </div>

    )
}

export default Tags