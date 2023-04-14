import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { APODAssignment } from './pages/APODAssignment'

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/galaxy-collisions' element={<APODAssignment href='/galaxy-collisions' page='content' />} />
            <Route path='/galaxy-collisions/references' element={<APODAssignment href='' page='references' />} />
            <Route path='*' element={<Redirect />} />
        </Routes>
    </BrowserRouter>
)

const Redirect = () => {
    const navigate = useNavigate()
    React.useEffect(() => {
        navigate('/galaxy-collisions')
    }, [])
    return <div className='flex h-screen w-screen items-center justify-center'>Loading Page...</div>
}

export default App
