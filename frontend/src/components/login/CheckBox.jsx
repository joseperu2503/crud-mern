import React from 'react'

const CheckBox = ({value, setValue, label}) => {

    const onClick = () => {
        setValue(!value)
    }

    return (
        <div className="flex">
            <div
                className={ 'w-5 h-5 border rounded flex items-center justify-center cursor-pointer ' + ( value ? 'bg-primary-500 text-white' : '') }
                onClick={onClick}
            >
                { value && <i className="fas fa-check text-xxs"></i>}
            </div>
            <label className="ml-2 text-sm text-slate-500 font-normal">{label}</label>
        </div>
    )
}

export default CheckBox
