import './App.css'
import BlogsPage from './pages/BlogsPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BlogPage from './pages/BlogPage'
import Header from './components/Header'
import HomePage from './pages/HomePage'

function App() {

    return (
        <BrowserRouter>
            <div className="bg-slate-200 fixed top-0 right-0 left-0 bottom-0">
                <Header>
                    <div className='max-w-7xl mx-auto pt-20 px-4 sm:px-8'>
                        <Routes>
                            <Route path='/' element={<HomePage/>}></Route>
                            <Route path='/blogs' element={<BlogsPage/>}></Route>
                            <Route path='/blogs/nuevo' element={<BlogPage/>}></Route>
                            <Route path='/blogs/:id' element={<BlogPage/>}></Route>
                        </Routes>
                    </div>
                </Header>


            </div>
        </BrowserRouter>
    )
}

export default App
