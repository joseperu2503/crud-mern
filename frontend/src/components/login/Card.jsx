import React from 'react'

const Card = ({children}) => {
    return (
        <div className="bg-white w-full shadow-md rounded-lg p-8">
            { children }
        </div>
    )
}

export default Card
