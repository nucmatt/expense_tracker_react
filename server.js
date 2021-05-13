import express from 'express';
import { config } from 'dotenv';
// Colors allows for coloring your console messages
import colors from 'colors';
import morgan from 'morgan';
import connectDB from './config/db.js';

config({ path: './config/config.env' });

connectDB();

import transactions from './routes/transactions.js';

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

// app.get('/', (req, res) => res.send('Hello'));
// This app.use statement mounts the transactions route brought in above.
app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
);
