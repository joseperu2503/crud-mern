import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import Card from '../components/Card'
import { URI } from '../constants'

const BlogPage = () => {

    const navigate = useNavigate()

    const { id } = useParams();
    const [blog, setBlog] = useState({
        title:'',
        content: ''
    });

    const [title, setTitle] = useState('');

    useEffect(() => {
        if(id){
            setTitle('Update Blog')
            getBlog()
        }
        else{
            setTitle('New Blog')
        }


    }, []);

    const getBlog = async () => {
        const res = await axios.get(`${URI}/blogs/${id}`)
        console.log(res)
        setBlog(res.data)
    }

    const changeTitle = (event) => {
        setBlog({...blog, title: event.target.value})
    }

    const changeContent = (event) => {
        setBlog({...blog, content: event.target.value})
    }

    const onCancel = () => {
        navigate('/blogs')
    }

    const onSubmit = async () => {
        if(id){
            await axios.put(`${URI}/blogs/${id}`,blog)
        }else{
            await axios.post(`${URI}/blogs`,blog)
        }

        navigate('/blogs')
    }

    return (
        <div>
            <Card>
                <h2 className='text-lg text-slate-700 mb-8'>{title}</h2>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col'>
                        <label>Title</label>
                        <input
                            type="text"
                            value={blog.title}
                            onChange={changeTitle}
                            className="border rounded-md py-1 px-2 text-slate-800 outline-none focus:border-blue-500 shadow-sm"
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label>Content</label>
                        <textarea
                            value={blog.content}
                            onChange={changeContent}
                            className="border rounded-md py-1 px-2 text-slate-800 outline-none focus:border-blue-500 shadow-sm"
                        ></textarea>
                    </div>
                </div>
                <div className="flex gap-4 mt-8 justify-end">
                    <button
                        type="button"
                        className="py-1 px-3 text-slate-800 text-base rounded-md bg-white border border-slate-300 hover:border-blue-600 hover:text-blue-700"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                    <button
                        className="py-1 px-3 text-white text-base rounded-md bg-blue-700 hover:bg-blue-600"
                        onClick={onSubmit}
                    >
                        {id ? 'Update' : 'Save'}
                    </button>
                </div>
            </Card>
        </div>
    )
}

export default BlogPage
