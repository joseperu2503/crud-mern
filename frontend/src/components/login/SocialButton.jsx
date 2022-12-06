import React from 'react'

const SocialButton = ({text,img}) => {
    return (
        <button
            type="button"
            className="
                w-full
                text-black
                hover:bg-gray-100
                shadow
                border
                font-medium
                rounded-lg
                text-sm
                px-5
                py-2
                flex
                justify-center
                items-center
            "
        >

            <img src={img} className="h-8 mr-1.5"/>
            <span className="hidden sm:block">{text}</span>

        </button>
    )
}

export default SocialButton
