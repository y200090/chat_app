import React, { useContext } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SetUpProfile from './pages/SetUpProfile';
import NotFound from './pages/NotFound';
import User from './pages/User';
import Settings from './pages/Settings';
import Chats from './pages/Chats';
import Dashboard from './pages/Dashboard';

const App = () => {
  const { currentUser } = useContext(AuthContext);
  const location = useLocation();

  const ProtectedRoute = () => {    
    if (!currentUser) {
      return <Navigate to={'/login'} state={{ from: location}} replace />;
    }
    return <Outlet />;
  };
  
  return (
    <>
      <Routes>
        <Route path='/' element={currentUser ? <User /> : <Home />}>
          <Route element={<ProtectedRoute />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='chats' element={<Chats />} />
            <Route path='settings' element={<Settings />} />
          </Route>
        </Route>
        
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/register/:accesstoken' element={<SetUpProfile />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
