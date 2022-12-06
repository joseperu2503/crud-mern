import React from 'react'

const Card = ({children}) => {
  return (
    <div className="bg-white w-full shadow-md p-5 rounded-lg">
        {children}
    </div>
  )
}

export default Card
