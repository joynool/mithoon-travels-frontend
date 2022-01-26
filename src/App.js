import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Login from './Pages/Authentication/Login/Login';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';

function App ()
{
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
