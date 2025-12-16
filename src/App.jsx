import {Route, Routes, BrowserRouter} from 'react-router-dom'
import './App.css'
//Paginas
import Home from "./pages/Home/Home.jsx";
import Blog from './pages/Blog/Blog.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
