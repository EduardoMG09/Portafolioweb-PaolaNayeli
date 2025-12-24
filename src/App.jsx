import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout.jsx';
//Paginas
import Home from "./pages/Home/Home.jsx";
import Blog from './pages/Blog/Blog.jsx';
import Biblioteca from './pages/Biblioteca/Biblioteca.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Use a layout route at '/' and relative child paths */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
