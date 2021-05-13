import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
	transactions: [],
	error: null,
	loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	// Actions
	async function getTransactions() {
		try {
			// Remember, you don't need http://localhost:5000 in the request since it was added as a proxy in the client package.json
			const res = await axios.get('/api/v1/transactions');

			dispatch({
				type: 'GET_TRANSACTIONS',
				// The get request above returns the full body of the database transactions. Since we only want to the display the transactions in History we will access those in the data property of the response object, hence res.data.data.
				payload: res.data.data,
			});
		} catch (error) {
			dispatch({
				type: 'TRANSACTION_ERROR',
				payload: error.response.data.error,
			});
		}
	}

	async function deleteTransaction(id) {
		try {
			await axios.delete(`/api/v1/transactions/${id}`);

			dispatch({
				type: 'DELETE_TRANSACTION',
				payload: id,
			});
		} catch (error) {
			dispatch({
				type: 'TRANSACTION_ERROR',
				payload: error.response.data.error,
			});
		}
	}
	async function addTransaction(transaction) {
		const config = {
			header: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.post('api/v1/transactions', transaction, config);

			dispatch({
				type: 'ADD_TRANSACTION',
				// Remember the response object has a data property and the body of the response also has a data property, hence to get at the body's data property you need res.data.data
				payload: res.data.data,
			});
		} catch (error) {
			dispatch({
				type: 'TRANSACTION_ERROR',
				payload: error.response.data.error,
			});
		}
	}

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				error: state.error,
				loading: state.loading,
				getTransactions,
				deleteTransaction,
				addTransaction,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
