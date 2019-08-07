import React from 'react';
import Container from 'react-bootstrap/Container';
import CreateQuiz from './create-quiz.jsx';
import Setup from './setup.jsx';
import SolveQuiz from './solveQuiz.jsx';
import ls from 'local-storage';
import AppRouter from './app-route.jsx';

export default class AppComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            key: 'quiz-key',
            quizList: [],
            selection: ''
        };
        this.addToQuiz = this.addToQuiz.bind(this);
    }

    componentDidMount() {
        if (ls.get(this.state.key)) {
            this.setState({quizList: JSON.parse(ls.get(this.state.key))}, () => {
                console.log('successfully stored from localstorage ', this.state.quizList);
            });
        } else {
            ls.set(this.state.key, JSON.stringify([]));
            console.log('creating a localstorage for quizList');
        }
    }

    addToQuiz(quiz) {
        console.log('quiz is ', quiz);
        let quizzes = [...this.state.quizList, quiz];
        console.log('quizList ', quizzes);
        this.setState({quizList: quizzes}, () => {
            console.log('adding to Quiz ', this.state.quizList);
            ls.set(this.state.key, JSON.stringify(this.state.quizList));
        });
    }

    render() {
        return(
            <Container>
                <AppRouter onCreateQuiz={this.addToQuiz} quizList={this.state.quizList}/>
            </Container>
        );
    }
}