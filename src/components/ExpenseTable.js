import React from "react";
import { Table } from "react-bootstrap";

function ExpenseTable(props) {
    const expenseRows = props.addedExpenses.map(expense => (
        <tr>
            <td>{expense.date}</td>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.location}</td>
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