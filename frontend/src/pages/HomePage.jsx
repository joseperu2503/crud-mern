import React from 'react'
import Card from '../components/Card'
import mysqlLogo from '../assets/logos/mysql.png'
import reactLogo from '../assets/logos/react.png'
import expressLogo from '../assets/logos/express.png'
import nodeLogo from '../assets/logos/node.png'

const HomePage = () => {
    const tools = ['React router', 'Axios', 'Tailwind','Ant desing', 'Font awesome']
    return (
        <Card>
            <div className='flex justify-center text-xl text-slate-700'>
                <h2>CRUD MERN</h2>
            </div>
            <div className='flex justify-center items-center gap-4 mt-16'>
                <div>
                    <img src={mysqlLogo} alt="mysql_logo" className='w-28'/>
                </div>
                <div>
                    <img src={expressLogo} alt="mysql_logo" className='w-28'/>
                </div>
                <div>
                    <img src={reactLogo} alt="mysql_logo" className='w-28'/>
                </div>
                <div>
                    <img src={nodeLogo} alt="mysql_logo" className='w-28'/>
                </div>
            </div>
            <div className='mt-10'>
                <span className='text-lg font-bold'>Secondary Tools</span>
                <div className='pl-8 mt-4'>
                    {tools.map(tool => (
                        <div className='text-lg'>- {tool}</div>
                    ))}
                </div>

            </div>
        </Card>
    )
}

export default HomePage
