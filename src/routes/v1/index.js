const express = require('express');
const userRoute = require('./UserRoutes');
const docsRoute = require('./docsRoute');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/users',
    route: userRoute,
  },
];

const devRoutes = [
  
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});


  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  })

module.exports = router;
