import React, {useState} from 'react' //useEffect
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //useNavigate
import './index.css'

import {SharedDashboardLayout,ShareLayout,ProtectedRoute} from './components/Extra';
import {About,Dashboard,Home,Error,Login,Register,Products,SingleProduct} from './components/pages';

const App = () => {
  // const navigate = useNavigate();
  const [user, setUser] = useState(true);
  // const [authenticated, setauthenticated] = useState(null);

  

  // useEffect(() => {
  //   const detail = window.localStorage.getItem('user')
  //   if(detail !== null){
  //     setUser(JSON.parse(detail))
  //   }
  //   // navigate('/dashboard')
  // }, []);

  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
        <Route path="/" element={<ShareLayout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="login" element={<Login setUser={setUser}> </Login>} />
          <Route path="register" element={<Register />} />
        </Route>

          {/* <Route path="dashboard" element={<SharedDashboardLayout />}>
            <Route index element={<Dashboard />} />
          </Route> */}
          <Route path="products" element={<ProtectedRoute user={user}><SharedDashboardLayout /></ProtectedRoute>}>
            <Route index element={<Products />} />
            <Route path=":id" element={<SingleProduct />} />
          </Route>

          <Route path="dashboard" element={<ProtectedRoute user={user}><SharedDashboardLayout /></ProtectedRoute>}>
            <Route index element={<Dashboard user={user} />} />
          </Route>

          {/* <Route path="dashboard" element={<ProtectedRoute user={user}> 
              <Dashboard user={user} />
            </ProtectedRoute>}/> */}

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App