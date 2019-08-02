import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

export default class SolveQuiz extends React.Component {
    constructor(props) {
        console.log('props ', props);
        super(props);
    }

    render() {
        return (
            <Row>
                <Col md={12}>SolveQuiz</Col>
            </Row>
        )
    }
}