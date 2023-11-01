const express = require('express')
const router = express.Router()
const reviewsCtrl = require('../controllers/comments');

router.post('/recipes/:id/comments', reviewsCtrl.create);
router.delete('/recipes/:id', reviewsCtrl.deleteComment)

module.exports = router;