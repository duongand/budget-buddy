import React, { useState } from "react";
import ExpenseHeader from "./components/ExpenseHeader";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./expenseData";

function App() {
	const [formData, setFormData] = useState({
		date: "",
		description: "",
		amount: "",
		location: "",
	});

	function updateFields(event) {
		const { name, value } = event.target;

		setFormData(prevFormData => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const [addedExpenses, setAddedExpenses] = useState([]);
	function addExpense() {
		setAddedExpenses(prevAddedExpenses => ([
			...prevAddedExpenses,
			formData
		]));

		setFormData({
			date: "",
			description: "",
			amount: "",
			location: "",
		});
	};

	function removeExpense(date, location) {
		setAddedExpenses(prevAddedExpenses => {
			return prevAddedExpenses.filter(expense => expense.date !== date && expense.location !== location);
		});
	};

	return (
		<div className="content-wrap">
			<ExpenseHeader
				formData={formData}
				onChange={updateFields}
				onSubmit={addExpense}
			/>
			{addedExpenses.length > 0 && <ExpenseTable addedExpenses={addedExpenses} deleteExpense={removeExpense} />}
		</div>
	);
}

export default App;
