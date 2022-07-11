import React, { useState } from "react";
import ExpenseHeader from "./components/ExpenseHeader";
import ExpenseTable from "./components/ExpenseTable";

function App() {
	const [formData, setFormData] = useState({
        date: "",
        description: "",
        amount: "",
        location: "",
    });

	function updateFields(event) {
		const {name, value} = event.target;

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

	return (
		<div className="content-wrap">
			<ExpenseHeader formData={formData} onChange={updateFields} onSubmit={addExpense} />
			{addedExpenses.length > 0 && <ExpenseTable addedExpenses={addedExpenses} />}
		</div>
	);
}

export default App;
