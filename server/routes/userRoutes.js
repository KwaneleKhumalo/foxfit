import { Router } from 'express';
import { editUser, getSingleUser, getUsers, login, logout, profile, register, verifyEmail } from '../controllers/userController.js';
import { adminProtect, protect } from '../middleware/protectMiddleware.js';
const userRouter = Router();

// Get Routes: 

// Admin Only
userRouter.route('/').get(protect, adminProtect, getUsers)
userRouter.route('/:userID').get(protect, adminProtect, getSingleUser)

// Authenticated Users + Admin 
userRouter.get("/auth/profile", protect, profile)
userRouter.route("/auth/settings").put(protect, editUser)

// Post Route
userRouter.post("/registration", register)
userRouter.post("/verify-email", verifyEmail)
userRouter.post("/login", login)

// Users will need to have been Authenticated to logout
userRouter.post("/logout", protect, logout)

// Update Route

// Delete Route


export default userRouter