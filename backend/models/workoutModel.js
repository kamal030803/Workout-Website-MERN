import mongoose from 'mongoose';

const WorkoutSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		reps: {
			type: Number,
			required: true,
		},
		load: {
			type: Number,
			required: true,
		},
	},
	{
		autoIndex: true,
		timestamps: true,
	}
);

export default mongoose.model('Workout', WorkoutSchema);
