import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoose from 'mongoose';
import workoutRoutes from './routes/workouts.routes.js';

// Configure port number
dotenv.config();
const PORT = process.env.SERVER_PORT || 8000;

// Create express server
const app = express();

// Used middle-wares
app.use([morgan('tiny'), express.json()]);

// Test server/database connection
app.use('/api', workoutRoutes);

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		// Start receiving requests on specific port
		app.listen(PORT, () => {
			console.log(
				`Connected to database && Listening on http://localhost:${PORT}`
			);
		});
	})
	.catch((error) => {
		console.error(error);
	});
