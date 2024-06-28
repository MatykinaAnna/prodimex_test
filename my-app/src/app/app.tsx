import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/login/ui/login'
import MainPage from '../pages/main_page/ui/main_page'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/main-page" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
