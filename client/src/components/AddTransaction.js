import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
	const [text, setText] = useState('');
	const [amount, setAmount] = useState(0);

	const { addTransaction } = useContext(GlobalContext);

	const onSubmit = (e) => {
		e.preventDefault();

		const newTransaction = {
			id: Math.floor(Math.random() * 100000000),
			// Since component state is text and amount(useStates above), we can simply use text and amount here since they are state variables and updated with user inputs
			text,
			amount: +amount,
		};

		addTransaction(newTransaction);
	};
	return (
		<>
			<h3>Add new transaction</h3>
			<form onSubmit={onSubmit}>
				<div className='form-control'>
					<label htmlFor='text'>Text</label>
					<input
						type='text'
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeholder='Enter text...'
					/>
				</div>
				<div className='form-control'>
					<label htmlFor='amount'>
						Amount <br />
						(negative - expense, positive - income)
					</label>
					<input
						type='number'
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						placeholder='Enter amount...'
					/>
				</div>
				<button className='btn'>Add transaction</button>
			</form>
		</>
	);
};

export default AddTransaction;
