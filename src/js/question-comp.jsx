import React from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export default class QuestionComp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="question" >
                <Card bg="light" text="primary">
                    <Card.Header>{this.props.question.question_name}</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={12}>
                                <Row>
                                    <Col md={2}>
                                        <input
                                            type="radio"
                                            name="question"
                                            value={this.props.question.options[0].name}
                                        />
                                    </Col>
                                    <Col md={10}>
                                        {this.props.question.options[0].name}
                                    </Col>
                                </Row>
                            </Col>
                            <hr/>
                            <Col md={12}>
                                <Row>
                                    <Col md={2}>
                                        <input
                                            type="radio"
                                            name="question"
                                            value={this.props.question.options[1].name}
                                        />
                                    </Col>
                                    <Col md={10}>
                                        {this.props.question.options[1].name}
                                    </Col>
                                </Row>
                            </Col>
                            <hr/>
                            <Col md={12}>
                                <Row>
                                    <Col md={2}>
                                        <input
                                            type="radio"
                                            name="question"
                                            value={this.props.question.options[2].name}
                                        />
                                    </Col>
                                    <Col md={10}>
                                        {this.props.question.options[2].name}
                                    </Col>
                                </Row>
                            </Col>
                            <hr/>
                            <Col md={12}>
                                <Row>
                                    <Col md={2}>
                                        <input
                                            type="radio"
                                            name="question"
                                            value={this.props.question.options[3].name}
                                        />
                                    </Col>
                                    <Col md={10}>
                                        {this.props.question.options[3].name}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}