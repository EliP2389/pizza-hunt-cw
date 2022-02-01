const router = require('express').Router();
const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

// add '/comments' to routes created in 'pizza-routes.js'
router.use('/comments', commentRoutes)

// add prefix of `/pizzas` to routes cretaed in `pizza-routes.js`
router.use('/pizzas', pizzaRoutes);

module.exports = router;