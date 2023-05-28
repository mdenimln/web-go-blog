import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogDetail from './pages/BlogDetail';
import ButtonSite from './components/ButtonSite';
                  

function App() {
  return (
    <div className="App">
      <div className='head'>
        
        <h1 className='judul'>Go Blog</h1>
        <nav className='nav'>
          
            <Link className='link-item' to='/'>Home</Link>
          
          
            <Link className='link-item' to='/profile'>Profile</Link>
          
          
            <Link className='link-item' to='/blog'>Blog</Link>
          
          
            <ButtonSite />
          
        </nav>
      </div>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/blog/:id' element={<BlogDetail />} />
      <Route path='/contact' element={<Contact />} />
     </Routes>
    </div>
  );
}

export default App;
