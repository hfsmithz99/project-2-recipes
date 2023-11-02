const express = require('express');
const router = express.Router();
const recipesCtrl = require('../controllers/recipes');

router.get('/recommended', recipesCtrl.recommended);
router.get('/', recipesCtrl.index);
router.get('/new', recipesCtrl.new);
router.post('/', recipesCtrl.create)
router.get('/:id', recipesCtrl.show)
router.get('/:id/edit', recipesCtrl.showUpdate);
router.put('/:id', recipesCtrl.update);


module.exports = router;