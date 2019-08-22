const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// Endpoint : 'api/v1/cities'

//User Profile
router.get('./:city_id', ctrl.city.show);
router.get('/', ctrl.city.index);
router.put('./:city_id', authRequired, ctrl.city.edit);
router.delete('./:slug', authRequired, ctrl.city.delete);
router.post('/', authRequired, ctrl.city.create),

module.exports = router;