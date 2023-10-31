import { Router } from 'express'
import { createWorkout, getUserWorkoutPlan } from '../controllers/WorkoutPlansController.js';
import { protect } from '../middleware/protectMiddleware.js';
const workoutRouter = Router();

workoutRouter.route('/').post(protect, createWorkout).get(protect, getUserWorkoutPlan)

export default workoutRouter;
