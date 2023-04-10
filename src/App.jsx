import './styles/App.scss';
import Store from './store/app-context';

import ErrorSuspense from './components/ErrorSuspense';
import Header from './components/Header';

// Pages
import MyTeam from './pages/MyTeam/MyTeam';
import LinksPage from './pages/LinksPage/LinksPage';
import NotFound from './pages/NotFound'; 

import { Route, Routes } from 'react-router-dom';

function App() {
  const { width } = Store()
  return (
    <div className="App">
      <div className='main' style={width < 767 ? { margin : "0", height: "100%", borderRadius: "0" }: {}}>
        <Routes>
          <Route element={<ErrorSuspense element={<Header/>}/>}>
            {/* <Route index element={<Home/>} /> */}
            <Route index element={<LinksPage/>} />
            <Route path=":name" element={<LinksPage/>} />
            <Route path="/my-team" element={<MyTeam/>} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
