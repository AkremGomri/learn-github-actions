const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserCtr');

router.get('/', userController.getUsers);
router.post('/', userController.createOneUser);
router.delete('/:id', userController.deleteOneUser);
router.put('/:id', userController.updateOneUser);

module.exports = router;