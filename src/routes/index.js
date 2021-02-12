import {
  Login,
  Vehicles,
  Register,
  Maintenances,
} from '../pages';
import VehicleDetailContainer from "../components/VehicleDetail";

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
    path: '/vehicles/:id',
    component: VehicleDetailContainer,
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