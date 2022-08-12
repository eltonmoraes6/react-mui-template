import { Route, Routes } from 'react-router-dom';
import { Dashboard, NotFound, SignIn, SignUp, User } from '../../pages';
import PrivateRoutes from '../PrivateRoutes';

import Auth from '../auth';
import { privateRoutes } from '../../routes';

const Views = () => {
  const isAuth = Auth();
  return (
    <Routes>
      <Route path='/login' element={!isAuth ? <SignIn /> : <Dashboard />} />
      <Route path='/register' element={!isAuth ? <SignUp /> : <Dashboard />} />
      <Route path='/profile' element={<User />} />
      <Route path='/*' element={<NotFound />} />
      <Route element={<PrivateRoutes />}>
        {privateRoutes.map(({ path, element }, key) => (
          <Route exact path={path} element={element} key={key} />
        ))}
      </Route>
    </Routes>
  );
};

export default Views;
