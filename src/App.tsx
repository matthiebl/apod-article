import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { APODAssignment } from './pages/APODAssignment'

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<b>Hi</b>} />
            <Route path='/galaxy-collisions' element={<APODAssignment href='/galaxy-collisions' page='content' />} />
            <Route path='/galaxy-collisions/references' element={<APODAssignment href='' page='references' />} />
        </Routes>
    </BrowserRouter>
)

export default App
