import CreateOperationPage from '../Pages/CreateOperation/CreateOperation';
import LoginPage from '../Pages/Login/LoginPage';
import SignupPage from '../Pages/Signup/SignupPage';
import Home from '../Pages/Home/Home';
import UpdateOperationsPage from '../Pages/UpdateOperations/UpdateOperationsPage';
import ABMPage from '../Pages/ABMPage/ABMpage';
import NotFound from '../Pages/NotFound/NotFound';

export const publicRoutes = [
  {
    id: 1,
    path: '/login',
    component: <LoginPage />,
  },
  {
    id: 2,
    path: '/signup',
    component: <SignupPage />,
  },
];
export const privateRoutes = [
  {
    id: 3,
    path: '/',
    component: <Home />,
  },
  {
    id: 4,
    path: '/operaciones',
    component: <ABMPage />,
  },
  {
    id: 5,
    path: '/crear',
    component: <CreateOperationPage />,
  },
  {
    id: 6,
    path: '/actualizar/:idParam',
    component: <UpdateOperationsPage />,
  },

  {
    id: 7,
    path: '*',
    component: <NotFound />,
  },
];
