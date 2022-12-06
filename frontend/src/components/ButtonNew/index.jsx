import React from 'react'

const ButtonNew = ({onClick}) => {
    return (
        <button type="button"
            onClick={onClick}
            className="
                inline-flex
                justify-center
                items-center
                leading-none
                text-center
                h-8
                px-3.5
                py-2
                bg-blue-500
                text-white
                font-medium
                text-sm
                rounded-md
                shadow-md
                hover:bg-blue-600
                hover:shadow-lg
                focus:shadow-lg
                focus:outline-none
                focus:ring-0
                active:shadow-lg
                transition
                duration-150
                ease-in-out
            "
        >
            <span className="inline-flex items-center">
                <i className="fas fa-plus mr-1"></i> New
            </span>

        </button>
    )
}

export default ButtonNew
