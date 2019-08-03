import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Alert from 'react-bootstrap/Alert'
import './../css/create-quiz.scss';

export default class CreateQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Quiz: {
                title: '',
                Questions: [],
            },
            hasEditingStated: false,
            hasSubmitted: false
        }
        this.storeQuestionTitle = this.storeQuestionTitle.bind(this);
        this.showFirstForm = this.showFirstForm.bind(this);
        this.showSecondForm = this.showSecondForm.bind(this);
        this.pushEmptyQuestion = this.pushEmptyQuestion.bind(this);
        this.shouldCreateButtonBeDisabled = this.shouldCreateButtonBeDisabled.bind(this);
        this.storeQuestionName = this.storeQuestionName.bind(this);
        this.storeOptions = this.storeOptions.bind(this);
        this.storeCorrectAnswer = this.storeCorrectAnswer.bind(this);
        this.showSecondForm = this.showSecondForm.bind(this);
    }

    pushEmptyQuestion() {
        let quiz = {...this.state.Quiz};
        let obj = {
            question_name: '',
            options: [
                {
                    name: ''
                }, {
                    name: ''
                }, {
                    name: ''
                }, {
                    name: ''
                }
            ],
            correct_answer: {
                name: ''
            }
        };
        quiz.Questions.push(obj);
        this.setState({Quiz: quiz});
        console.log(this.state);
    }

    storeQuestionTitle(evt) {
        if (!this.state.hasEditingStated) {
            if (evt.target.value) {
                this.pushEmptyQuestion();
                this.setState({'hasEditingStated': true});
            }
        }
        let quiz = {...this.state.Quiz};
        quiz.title = evt.target.value;
        this.setState({Quiz: quiz});
    }

    showFirstForm() {
        return (
            <Row>
                <Col md={12}>
                    <input
                        type="text"
                        value={this.state.Quiz.title}
                        onChange={() => this.storeQuestionTitle(event)}
                        placeholder="Enter the quiz title"
                    />
                </Col>
            </Row>
        );
    }

    shouldCreateButtonBeDisabled() {
        let questions = [...this.state.Quiz.Questions];
        if (questions.length === 0) {
            return true;
        }
        if (this.state.Quiz.title === '') {
            return true;
        }
        let flag = false;
        for (let index = 0; index < questions.length; index++) {
            if (questions[index].question_name === '' ||
            questions[index].options[0].name === '' ||
            questions[index].options[1].name === '' ||
            questions[index].options[2].name === '' ||
            questions[index].options[3].name === '' ||
            questions[index].correct_answer.name === '') {
                flag = true;
                break;
            }
        }
        console.log(flag);
        return flag;
    }

    resetState() {
        let quiz = {
            title: '',
            Questions: []
        };
        this.setState({Quiz: quiz});
    }

    submitQuiz() {
        console.log('submit quiz: ', this.state.Quiz);
        let quiz = {...this.state.Quiz};
        this.props.onCreateQuiz(quiz);
        this.setState({hasSubmitted: true});
        this.setState({hasEditingStated: false});
    }

    storeQuestionName(evt, index) {
        let quiz = {...this.state.Quiz};
        quiz.Questions[index].question_name = evt.target.value;
        this.setState({Quiz: quiz});
        console.log(this.state);
    }

    storeOptions(evt, questionIndex, optionIndex) {
        let quiz = {...this.state.Quiz};
        quiz.Questions[questionIndex].options[optionIndex].name = evt.target.value;
        this.setState({Quiz: quiz});
        console.log(this.state);
    }

    storeCorrectAnswer(evt, index){
        let quiz = {...this.state.Quiz};
        quiz.Questions[index].correct_answer.name = evt.target.value;
        this.setState({Quiz: quiz});
        console.log(this.state);
    }

    createAnotherQuiz() {
        this.setState({hasSubmitted: false});
        this.resetState();
    }

    showSecondForm() {
        return (
            <div className="questions-container">
                <Breadcrumb>
                    <Breadcrumb.Item active>QUESTIONS</Breadcrumb.Item>
                </Breadcrumb>
                {
                     this.state.Quiz.Questions.map((question, index) => {
                        return (
                            <div key={index}>
                                <Card bg="light" text="primary">
                                    <Card.Header>{index + 1}.</Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col md={12} sm={12}>
                                                <input
                                                    type="text"
                                                    onChange={() => this.storeQuestionName(event, index)}
                                                    placeholder="Enter the Question Name"
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="options">
                                            <Col md={2} sm={3}>
                                                <input
                                                    type="text"
                                                    onChange={() => this.storeOptions(event, index, 0)}
                                                    placeholder="option 1"
                                                />
                                            </Col>
                                            <Col md={2} sm={3}>
                                                <input
                                                    type="text"
                                                    onChange={() => this.storeOptions(event, index, 1)}
                                                    placeholder="option 2"
                                                />
                                            </Col>
                                            <Col md={2} sm={3}>
                                                <input
                                                    type="text"
                                                    onChange={() => this.storeOptions(event, index, 2)}
                                                    placeholder="option 3"
                                                />
                                            </Col>
                                            <Col md={2} sm={3}>
                                                <input
                                                    type="text"
                                                    onChange={() => this.storeOptions(event, index, 3)}
                                                    placeholder="option 4"
                                                />
                                            </Col>
                                            <Col md={2} sm={3}>
                                                <input
                                                    type="text"
                                                    onChange={() => this.storeCorrectAnswer(event, index)}
                                                    placeholder="correct answer"
                                                />
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <br/>
                            </div>
                        )
                    })
                }
                <Row>
                    <Col md={6} className="button">
                        <Button
                            size="md"
                            variant="outline-primary"
                            className={this.shouldCreateButtonBeDisabled() ? 'disabled': ''}
                            disabled={this.shouldCreateButtonBeDisabled()}
                            onClick={() => this.pushEmptyQuestion()}>Create Next Questions
                        </Button>
                    </Col>
                    <Col md={6} className="button">
                        <Button
                            size="md"
                            variant="outline-success"
                            className={this.shouldCreateButtonBeDisabled() ? 'disabled': ''}
                            disabled={this.shouldCreateButtonBeDisabled()}
                            onClick={() => this.submitQuiz()}>Submit Questions
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }

    showSuccessMessage() {
        return (
            <Alert variant="success">
                <Alert.Heading>You have successfully created {this.state.Quiz.title} quiz.</Alert.Heading>
                <hr />
                <p className="mb-0">
                    you can view your quiz and solve them in 'solve-quiz' area.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => this.createAnotherQuiz()} variant="outline-success">
                        Create Another quiz
                    </Button>
                </div>
            </Alert>
        )
    }
    render() {
        return (
            <div className="create-quiz">
                <div className="input-box">

                    {
                        this.state.hasSubmitted ? this.showSuccessMessage() : this.showFirstForm()
                    }
                </div>
                {
                    this.state.hasEditingStated ? this.showSecondForm() : ''
                }
            </div>
        )
    }
}