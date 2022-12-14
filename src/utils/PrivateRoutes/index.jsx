import { Navigate, Outlet } from 'react-router-dom';
import Auth from '../auth';
const PrivateRoutes = () => {
  const isAuth = Auth();
  return isAuth ? <Outlet /> : <Navigate to='/login' />;
};

// const useAuth = () => {
//     const user = { loggedIn: false };
//     return user && user.loggedIn;
//   };

//   const PrivateRoutes = () => {
//     const isAuth = useAuth();
//     return isAuth ? <Outlet /> : <Navigate to="/" />;
//   };

export default PrivateRoutes;
