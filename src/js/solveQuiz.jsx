import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import './../css/solve-quiz.scss';
import Alert from 'react-bootstrap/Alert'
import ListGroup from 'react-bootstrap/ListGroup';

export default class SolveQuiz extends React.Component {
    constructor(props) {
        console.log('props ', props);
        super(props);
        this.state = {
            quizStarted: false,
            quizAnswers: {
                Quiz_name: '',
                Answers: []
            }
        }
        console.log(props);
        this.showEmptyMessage = this.showEmptyMessage.bind(this);
        this.showTitles = this.showTitles.bind(this);
        this.showQuizTitles = this.showQuizTitles.bind(this);
        this.answerQuiz = this.answerQuiz.bind(this);
    }

    showEmptyMessage() {
        return (
            <Alert variant="success">
                <Alert.Heading>There are no quiz as of now.</Alert.Heading>
                <hr />
                <p className="mb-0">
                    You can create quiz By going to 'create-quiz'.
                </p>
            </Alert>
        )
    }

    showTitles() {
        return (
            <ListGroup variant="flush" className="question-list">
                <ListGroup.Item as="li" disabled>
                    Select the quiz you want to attend!.
                </ListGroup.Item>
                {
                    this.props.quizList.map((quiz, index) => {
                        return (
                            <ListGroup.Item as="li" key={index}>
                                {quiz.title}
                            </ListGroup.Item>
                        );
                    })
                }
            </ListGroup>
        )
    }
    showQuizTitles() {
        return (
            <div className="quiz-title">
                {
                    this.props && this.props.quizList && this.props.quizList.length ? this.showTitles() : this.showEmptyMessage()
                }
            </div>
        );
    }

    answerQuiz(quizName) {
        return (
            <p> Quiz name is {quizName} </p>
        )
    }

    render() {
        return (
            <div className="solve-quiz">
                <Row>
                    <Col md={12}>
                        {
                            !this.state.quizStarted ?
                            this.showQuizTitles():
                            this.answerQuiz(this.state.quizAnswers.Quiz_name)
                        }
                    </Col>
                </Row>
            </div>
        );
    }
}