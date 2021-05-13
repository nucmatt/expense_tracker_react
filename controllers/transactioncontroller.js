import Transaction from '../models/Transaction.js';

// @desc Get all transactions
// @route GET/api/v1/transactions
// @access Public
export const getTransactions = async (req, res, next) => {
	// res.send('GET transactions');
	try {
		const transactions = await Transaction.find();

		return res.status(200).json({
			success: true,
			count: transactions.length,
			data: transactions,
		});
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: 'Server Error',
		});
	}
};

// @desc Add transaction
// @route POST /api/v1/transactions
// @access Public
export const addTransaction = async (req, res, next) => {
	// res.send('POST transaction');
	try {
		// This is just simple destructuring to get at the text and amount fields
		const { text, amount } = req.body;

		const transaction = await Transaction.create(req.body);

		return res.status(201).json({
			success: true,
			data: transaction,
		});
	} catch (error) {
		// console.log(error);
		if (error.name === 'ValidationError') {
			// Object is part of the error response. You can see everything contained in the error using the console log commented out above.
			const messages = Object.values(error.errors).map((value) => value.message);

			return res.status(400).json({
				success: false,
				error: messages,
			});
		} else {
			return res.status(500).json({
				success: false,
				error: 'Server Error',
			});
		}
	}
};

// @desc Delete transaction
// @route DELETE /api/v1/transactions/:id
// @access Public
export const deleteTransaction = async (req, res, next) => {
	res.send('DELETE transaction');
};
