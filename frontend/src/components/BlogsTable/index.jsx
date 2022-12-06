import React from 'react'
import { Table } from 'antd';
import ActionsDropdown from '../ActionsDropdown';


const BlogsTable = ({blogs,onEdit,onDelete}) => {

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'Content',
            dataIndex: 'content',
        },
        {
            title: 'Actions',
            dataIndex: 'content',
            render: (_,{id}) => (
                <ActionsDropdown onEdit={() => {onEdit(id)}} onDelete={() => {onDelete(id)}}/>
            )
        },
    ];

    return (
        <div>
            <Table dataSource={blogs} columns={columns} rowKey="id"/>
        </div>
    )
}

export default BlogsTable
