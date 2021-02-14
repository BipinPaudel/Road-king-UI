import {
  Login,
  Vehicles,
  Register,
  Maintenances,
  SingleVehicle,
  CreateVehicle
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
    path: '/vehicles/create',
    component: CreateVehicle,
    title: 'Create Vehicle',
    needsAuth: true
  },

  {
    path: '/vehicles/:id',
    component: SingleVehicle,
    title: 'Vehicle',
    needsAuth: true
  },
  {
    path: '/vehicles',
    component: Vehicles,
    title: 'Vehicles',
    needsAuth: true
  },
  {
    path: '/maintenances/vehicles/:id',
    component: Maintenances,
    title: 'Maintenances',
    needsAuth: true
  },

]

export default routes;