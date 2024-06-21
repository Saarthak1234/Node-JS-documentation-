const express = require("express");
const { handleGetAllUsers,
    handleGetUserByID,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
} = require('../controllers/user');
const router = express.Router();

// While working on routes in external files we work on router instead of router
// We removed the user after the / because we are working on requests sent on user
router.route('/')
    .get(handleGetAllUsers)
    .post(handleCreateNewUser);

router.route('/:id')
    .get(handleGetUserByID)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById);

module.exports = router;