import Workout from '../models/workoutModel.js';

/* ********************************************************** */
/* **********************  CREATE  ************************** */
/* ********************************************************** */
export const createWorkout = async (req, res) => {
	const { title, reps, load } = req.body;
	try {
		const workout = await Workout.create({ title, reps, load });
		res.status(200).json(workout);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

/* ********************************************************** */
/* ***********************  READ  *************************** */
/* ********************************************************** */
export const getAllWorkouts = async (_, res) => {
	try {
		const workouts = await Workout.find({}).sort({ createdAt: -1 });
		res.status(200).json(workouts);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

export const getWorkout = async (req, res) => {
	const { id } = req.body;
	try {
		const workout = await Workout.findById(id);
		if (!workout) return res.status(404).json({ error: 'No such workout!' });

		res.status(200).json(workout);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

/* ********************************************************** */
/* **********************  UPDATE  ************************** */
/* ********************************************************** */
export const updateWorkout = async (req, res) => {
	const { id, updatedWorkout } = req.body;
	try {
		const workout = await Workout.findByIdAndUpdate(id, updatedWorkout);
		if (!workout) return res.status(404).json({ error: 'No such workout' });

		res.status(200).json(workout);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

/* ********************************************************** */
/* **********************  DELETE  ************************** */
/* ********************************************************** */
export const deleteAllWorkouts = async (_, res) => {
	try {
		const workouts = await Workout.deleteMany({});
		res.status(200).json(workouts);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

export const deleteWorkout = async (req, res) => {
	const { id } = req.body;
	try {
		const workout = await Workout.findByIdAndDelete(id);
		if (!workout) return res.status(404).json({ error: 'No such workout' });
		res.status(200).json(workout);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};
