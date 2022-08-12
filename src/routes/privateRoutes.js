import {
  Customer,
  // Home,
  Dashboard,
  Pricing,
  // NotFound
} from '../pages';

const privateRoutes = [
  // { path: '/', element: Home },
  { path: '/customers', element: <Customer /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/pricing', element: <Pricing /> },
];

export default privateRoutes;
