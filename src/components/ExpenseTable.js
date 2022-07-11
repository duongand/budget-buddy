import React from "react";
import { Table, Button } from "react-bootstrap";

function ExpenseTable(props) {
    function removeExpense(key) {
        props.deleteExpense(key);
    };

    const expenseRows = props.addedExpenses.map(expense => (
        <tr key={expense.key}>
            <td>{expense.date}</td>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.location}</td>
            <td><Button variant="danger" aria-label="Close" onClick={() => {
                removeExpense(expense.key)
            }}>&times;</Button></td>
        </tr>
    ));

    return (
        <div className="table-wrapper">
            <Table striped bordered hover className="expense-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Location</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {expenseRows}
                </tbody>
            </Table>
        </div>

    );
};

export default ExpenseTable;