import express from "express";
import { UnFollowUser, countFollowUser, deleteUser, followUser, getAllUsers, getUser, updateUser } from "../Controllers/UserController.js";
import authMiddleWare from "../Middleware/authMiddleWare.js";

const router = express.Router();


router.get('/', getAllUsers);
router.get('/:id', getUser);
router.put('/:id', authMiddleWare, updateUser);
router.delete('/:id', authMiddleWare, deleteUser);
router.put('/:id/follow', authMiddleWare, followUser);
router.put('/:id/unfollow', authMiddleWare, UnFollowUser);
router.put('/:id/countfollow', authMiddleWare, countFollowUser);

export default router;