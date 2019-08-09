import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import './../css/solve-quiz.scss';
import Alert from 'react-bootstrap/Alert'
import ListGroup from 'react-bootstrap/ListGroup';
import AnswerQuiz from './answer-quiz.jsx';

export default class SolveQuiz extends React.Component {
    constructor(props) {
        console.log('props in solvequiz has ', props);
        super(props);
        this.state = {
            quizStarted: false,
            quizAnswers: {
                Quiz_name: '',
                Answers: []
            },
            quizIndex: null
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

    showQuestions(index) {
        this.setState({'quizIndex': index});
        this.setState({'quizStarted': true});
        console.log('index ', index);
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
                            <ListGroup.Item as="li" key={index} onClick={() => this.showQuestions(index)}>
                                <Row>
                                    <Col md={6}>{quiz.title}</Col>
                                    <Col md={6}>Questions - {quiz.Questions.length}</Col>
                                </Row>
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
                    this.props &&
                    this.props.quizList &&
                    this.props.quizList.length ?
                    this.showTitles() :
                    this.showEmptyMessage()
                }
            </div>
        );
    }

    answerQuiz() {
        return (
            <div className="answer-quiz">
                <p> Quiz name is {this.props.quizList[this.state.quizIndex].title} </p>
                <AnswerQuiz questions={this.props.quizList[this.state.quizIndex].Questions} />
            </div>
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
                            this.answerQuiz()
                        }
                    </Col>
                </Row>
            </div>
        );
    }
}