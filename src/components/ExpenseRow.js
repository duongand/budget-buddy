import React from 'react';
import { Button } from 'react-bootstrap';

function ExpenseRow({ addedExpenses, deleteExpense }) {
    return addedExpenses.map(expense => (
        <tr key={expense.key}>
            <td>{expense.date}</td>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.location}</td>
            <td><Button variant="danger" aria-label="Close" onClick={() => {
                deleteExpense(expense.key)
            }}>&times;</Button></td>
        </tr>
    ));
};

export default ExpenseRow;