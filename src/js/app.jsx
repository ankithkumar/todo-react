import React from 'react';
import Container from 'react-bootstrap/Container';
import CreateQuiz from './create-quiz.jsx';
import Tab from './tab.jsx';
import Setup from './setup.jsx';
import SolveQuiz from './solveQuiz.jsx';

export default class AppComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            Quiz: {},
            selection: ''
        }
        this.handleSelection = this.handleSelection.bind(this);
        console.log('APP COMPONENT!!!');
    }

    handleSelection(selectionVal) {
        console.log(selectionVal);
        this.setState({selection: selectionVal});
    }

    render() {
        return(
            <Container>
                <Tab onSelection={this.handleSelection} />
                { this.state.selection === 'createQuiz' && <CreateQuiz />}
                { this.state.selection === 'solveQuiz' && <SolveQuiz />}
                { !this.state.selection && <Setup />}
            </Container>
        );
    }
}