import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format.js';

export const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(GlobalContext);
	const sign = transaction.amount < 0 ? '-' : '+';

	return (
		<li className={transaction.amount < 0 ? 'minus' : 'plus'}>
			{transaction.text}{' '}
			<span>
				{sign}${numberWithCommas(Math.abs(transaction.amount))}
			</span>
			<button
				className='delete-btn'
				// MongoDB adds an underscore in front of the id property so you must use _id here instead of just id as in the React(no backend) version of the project.
				onClick={() => deleteTransaction(transaction._id)}
			>
				x
			</button>
		</li>
	);
};
