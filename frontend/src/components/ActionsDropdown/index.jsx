import React from 'react'
import { Dropdown, Menu } from 'antd';


const ActionsDropdown = ({ onEdit, onDelete }) => {

    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label:(
                        <div onClick={onEdit}>Edit</div>
                    )
                },
                {
                    key: '2',
                    label:(
                        <div onClick={onDelete}>Delete</div>
                    )
                }
            ]}
        />
    )
    return (
        <Dropdown overlay={menu} trigger="click">
            <button
                type="button"
                className="py-1 px-3.5 text-slate-800 text-base rounded-md bg-white border border-slate-300 hover:border-blue-600 hover:text-blue-700"
            >
                <i className="fas fa-ellipsis-v"></i>
            </button>
        </Dropdown>
    )
}

export default ActionsDropdown
