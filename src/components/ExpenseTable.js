import React from 'react';
import Table from 'react-bootstrap/Table';
import ExpenseRow from './ExpenseRow';

function ExpenseTable({ addedExpenses, deleteExpense }) {
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
                    <ExpenseRow addedExpenses={addedExpenses} deleteExpense={deleteExpense} />
                </tbody>
            </Table>
        </div>
    );
};

export default ExpenseTable;