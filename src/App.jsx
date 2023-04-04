import './styles/App.scss';
import ErrorSuspense from './components/ErrorSuspense';
import Header from './components/Header';

// Pages
import Home from './pages/Home'; 
import NotFound from './pages/NotFound'; 
import About from './pages/About'; 
import Contact from './pages/Contact'; 

import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <div className='main'>
        <Routes>
          <Route element={<ErrorSuspense element={<Header/>}/>}>
            <Route index element={<Home/>} />
            <Route path="*" element={<NotFound/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Route>
        </Routes>
        
      </div>
    </div>
  )
}

export default App
