import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { URI } from '../constants'
import BlogsTable from '../components/BlogsTable';
import ButtonNew from '../components/ButtonNew';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';

const BlogsPage = () => {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        getBlogs()
    }, []);

    const getBlogs = async () => {
        const res = await axios.get(`${URI}/blogs`)
        setBlogs(res.data)
    }

    const newBlog = () => {
        navigate('/blogs/nuevo')
    }

    const onEdit = (id) => {
        navigate(`/blogs/${id}`)
    }

    const onDelete = async (id) => {
        await axios.delete(`${URI}/blogs/${id}`)
        getBlogs()
    }

    return (
        <Card>
            <div className='flex mb-10'>
                <ButtonNew onClick={newBlog}/>
            </div>

            <BlogsTable blogs={blogs} onEdit={onEdit} onDelete={onDelete}/>
        </Card>
    )
}

export default BlogsPage
