import express from 'express';

import {addUser, getUsers, getUserById, editUser, deleteUser} from '../controller/user-controller.js';



const router = express.Router();

router.post('/add', addUser);
router.get('/allUser', getUsers);
router.get('/:id', getUserById);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);
export default router;