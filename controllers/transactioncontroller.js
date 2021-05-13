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
	res.send('POST transaction');
};

// @desc Delete transaction
// @route DELETE /api/v1/transactions/:id
// @access Public
export const deleteTransaction = async (req, res, next) => {
	res.send('DELETE transaction');
};
