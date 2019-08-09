import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Alert from 'react-bootstrap/Alert';
import QuestionComp from './question-comp.jsx';

export default class AnswerQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }

    showPrevQuestion() {
        if (this.state.index === 0) {
            return;
        }
        let index = this.state.index - 1;
        this.setState({index});
    }

    showNextQuestion() {
        if (this.state.index === this.props.questions.length - 1) {
            return;
        }
        let index = this.state.index + 1;
        this.setState({index});
    }

    render() {
        return (
            <div className="answer-quiz">
                <Row>
                    <Col xs={12}>
                        <QuestionComp index={this.state.index} question={this.props.questions[this.state.index]} />
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className="button">
                        <Button
                            size="md"
                            variant="outline-primary"
                            onClick={() => this.showPrevQuestion()}
                            >Prev
                        </Button>
                    </Col>
                    <Col md={4} className="button">
                        <Button
                            size="md"
                            variant="outline-primary"
                            onClick={() => this.showNextQuestion()}
                        >Next
                        </Button>
                    </Col>
                </Row>

            </div>
        );
    }
}