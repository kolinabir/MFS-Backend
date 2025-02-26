import { Router } from 'express';
import { AuthRoute } from '../Auth/auth.routes';
import { userRoutes } from '../modules/User/user.routes';
const router = Router();

const modulesRoutes = [
  {
    path: '/auth',
    router: AuthRoute,
  },
  {
    path: '/admin-control-panel',
    router: userRoutes,
  },
];
modulesRoutes.forEach((route) => router.use(route.path, route.router));

export default router;
