import Home from './screens/Home'
import ErrorPage from './screens/ErrorPage'
import About from './screens/About'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './screens/Login';
import NavA from './components/NavA';
import NavB from './components/NavB';
import Footer from './components/Footer'
import DonarList from './screens/DonarList';
import Adminpanel from './screens/Adminpanel';
import { useState } from 'react';
import Register from './screens/Register';
import ContactList from './screens/Contact'

const App = () => {

  const [admin, setAdmin] = useState(false)

  return (

    <>
      {
        admin ?

          <BrowserRouter>
            <NavA />
            <Routes>
              <Route path='*' element={<ErrorPage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/donarlist' element={<DonarList />} />
              <Route path='/admin' element={<Adminpanel />} />
            </Routes>
            <Footer />
          </BrowserRouter>
          :
          <BrowserRouter>
            <NavA />
            <NavB />
            <Routes>
              <Route path='*' element={<ErrorPage />} />
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<ContactList />} />
              <Route path='/donarlist' element={<DonarList />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
              <Route path='/admin' element={<Adminpanel />} />
            </Routes>
            <Footer />
          </BrowserRouter>

      }

    </>

  )
}

export default App