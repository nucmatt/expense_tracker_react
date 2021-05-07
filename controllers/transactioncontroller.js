// @desc Get all transactions
// @route GET/api/v1/transactions
// @access Public
export function getTransactions(req, res, next) {
	res.send('GET transactions');
}

// @desc Add transaction
// @route POST /api/v1/transactions
// @access Public
export function addTransaction(req, res, next) {
	res.send('POST transaction');
}

// @desc Delete transaction
// @route DELETE /api/v1/transactions/:id
// @access Public
export function deleteTransaction(req, res, next) {
	res.send('DELETE transaction');
}
