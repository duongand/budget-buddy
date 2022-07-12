import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

function ExpenseHeader(props) {
    const [validated, setValidated] = useState(false);

    function onChange(event) {
        props.onChange(event);
    };

    function handleSubmit(event) {
        const form = event.currentTarget;
        console.log(form);

        if (form.checkValidity() === true) {
            event.preventDefault();
            props.onSubmit();
        }
        
        event.preventDefault();
        setValidated(true);
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
                                onChange={onChange}
                                value={props.formData.date}
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
                                onChange={onChange}
                                value={props.formData.description}
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
                                type="text"
                                placeholder="Dollar Amount"
                                name="amount"
                                onChange={onChange}
                                value={props.formData.amount}
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
                                onChange={onChange}
                                value={props.formData.location}
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