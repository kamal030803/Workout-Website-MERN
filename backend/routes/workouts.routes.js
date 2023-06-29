import { Router } from 'express';
import {
	createWorkout,
	getWorkout,
	getAllWorkouts,
	updateWorkout,
	deleteWorkout,
	deleteAllWorkouts,
} from '../controllers/workoutController.js';

const workoutRoutes = Router();

// [/api/workouts]
workoutRoutes.route('/workouts').get(getAllWorkouts).delete(deleteAllWorkouts);

// [/api/workout]
workoutRoutes
	.route('/workout')
	.get(getWorkout)
	.post(createWorkout)
	.patch(updateWorkout)
	.delete(deleteWorkout);

export default workoutRoutes;
