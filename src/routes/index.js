import {
  Login,
  Vehicles,
  SingleVehicle,
  Register
} from '../pages';

const routes = [
  {
    path: '/auth/login',
    component: Login,
    title: 'Authentication',
    needsAuth: false,
  },
  {
    path: '/auth/register',
    component: Register,
    title: 'Registration',
    needsAuth: false,
  },
  {
    path: '/vehicles',
    component: Vehicles,
    title: 'Vehicles',
    needsAuth: true
  },
  {
    path: '/vehicles/:id',
    component: SingleVehicle,
    title: 'Contacts',
    needsAuth: true
  },
]

export default routes;