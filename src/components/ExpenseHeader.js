import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

function ExpenseHeader({ formData, onChange, onSubmit }) {
    const [validated, setValidated] = useState(false);

    function handleChange(event) {
        onChange(event);
    };

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity()) {
            onSubmit();
            setValidated(false);
        } else {
            setValidated(true);
        };
    };

    return (
        <header className="header-wrap">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                    <Col xs lg="4">
                        <Form.Group controlId="formDate">
                            <Form.Control
                                className="header--input"
                                type="date"
                                name="date"
                                onChange={handleChange}
                                value={formData.date}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col xs lg="4">
                        <Form.Group controlId="formDescription">
                            <Form.Control
                                className="header--input"
                                type="text"
                                placeholder="Description"
                                name="description"
                                onChange={handleChange}
                                value={formData.description}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col xs lg="4">
                        <h3 className="header--title">Budget Buddy</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs lg="4">
                        <Form.Group controlId="formAmount">
                            <Form.Control
                                className="header--input"
                                type="number"
                                placeholder="Dollar Amount"
                                name="amount"
                                onChange={handleChange}
                                value={formData.amount}
                                required    
                            />
                        </Form.Group>
                    </Col>
                    <Col xs lg="4">
                        <Form.Group controlId="formLocation">
                            <Form.Control
                                className="header--input"
                                type="text"
                                placeholder="Location"
                                name="location"
                                onChange={handleChange}
                                value={formData.location}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button
                            className="add-expense"
                            variant="primary"
                            type="submit"
                        >
                            Add Expense
                        </Button>
                    </Col>
                </Row>
            </Form>
        </header>
    );
};

export default ExpenseHeader;