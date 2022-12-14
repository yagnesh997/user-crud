const express = require('express')
const userRoute = require('./UserRoutes')
const carRoute = require('./CarRoutes')
const docsRoute = require('./docsRoute')
const authRoute = require('./authRoutes')
const carscRoute = require('./CarServiceRouter')

const router = express.Router()

const defaultRoutes = [
  {
    path: '/users',
    route: userRoute
  },
  {
    path: '/cars',
    route: carRoute
  },
  {
    path: '/auth',
    route: authRoute
  },
  {
    path: '/carsc',
    route: carscRoute
  }
]

const devRoutes = [
  {
    path: '/docs',
    route: docsRoute
  }
]

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route)
})
devRoutes.forEach((route) => {
  router.use(route.path, route.route)
})

module.exports = router
