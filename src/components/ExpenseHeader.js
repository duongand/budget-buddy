import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

function ExpenseHeader(props) {
    function onChange(event) {
        props.onChange(event);
    };

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit();
    };

    return (
        <header className="header-wrap">
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col xs lg="4">
                        <Form.Group controlId="formDate">
                            <Form.Control
                                className="header--input"
                                type="date"
                                name="date"
                                onChange={onChange}
                                value={props.formData.date}/>
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
                                value={props.formData.amount}/>
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
                                value={props.formData.location}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button
                            className="add-expense"
                            variant="primary"
                            onClick={handleSubmit}
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