import React, { useState, useEffect } from "react";
import ExpenseHeader from "./components/ExpenseHeader";
import ExpenseTable from "./components/ExpenseTable";

function App() {
	const [formData, setFormData] = useState({
		date: "",
		description: "",
		amount: "",
		location: "",
	});
	const [addedExpenses, setAddedExpenses] = useState(() => {
		return JSON.parse(window.localStorage.getItem('expense-items')) || []
	});

	function updateFields(event) {
		const { name, value } = event.target;

		setFormData(prevFormData => ({
			...prevFormData,
			[name]: value,
		}));
	};

	function addExpense() {
		const newExpense = {
			key: Math.random(),
			...formData
		};

		setAddedExpenses(prevAddedExpenses => ([
			...prevAddedExpenses,
			newExpense
		]));

		setFormData({
			date: "",
			description: "",
			amount: "",
			location: "",
		});
	};

	function removeExpense(key) {
		setAddedExpenses(prevAddedExpenses => {
			return prevAddedExpenses.filter(expense => expense.key !== key);
		});
	};

	useEffect(() => {
		window.localStorage.setItem('expense-items', JSON.stringify(addedExpenses));
	}, [addedExpenses]);

	return (
		<div className="content-wrap">
			<ExpenseHeader
				formData={formData}
				onChange={updateFields}
				onSubmit={addExpense}
			/>
			{addedExpenses && <ExpenseTable addedExpenses={addedExpenses} deleteExpense={removeExpense} />}
		</div>
	);
}

export default App;
