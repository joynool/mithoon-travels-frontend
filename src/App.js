import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AdminRoute from './Pages/Authentication/AdminRoute/AdminRoute';
import Login from './Pages/Authentication/Login/Login';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import BlogsApproval from './Pages/Dashboard/BlogsApproval';
import BlogsManagement from './Pages/Dashboard/BlogsManagement';
import Dashboard from './Pages/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ShareExperience from './Pages/Dashboard/ShareExperience';
import WriteReview from './Pages/Dashboard/WriteReview';
import Gallery from './Pages/Gallery/Gallery';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';

function App ()
{
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>}>
              <Route path="share-experience" element={<ShareExperience />} />
              <Route path="write-review" element={<WriteReview />} />
            </Route>
            <Route path="dashboard" element={<AdminRoute>
              <Dashboard />
            </AdminRoute>}>
              <Route path="blogs-management" element={<BlogsManagement />} />
              <Route path="blogs-approval" element={<BlogsApproval />} />
              <Route path="make-admin" element={<MakeAdmin />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
