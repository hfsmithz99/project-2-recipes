const express = require('express')
const router = express.Router()
const commentsCtrl = require('../controllers/comments');

router.post('/recipes/:id/comments', commentsCtrl.create);
router.delete('/recipes/:id', commentsCtrl.deleteComment)

module.exports = router;