import React from 'react';
import './../css/tab.scss';

export default class Tab extends React.Component {
    constructor(props) {
        console.log('props tab ', props);
        super(props);
        this.state = {
            selectedTab: ''
        };
        this.createQuiz = this.createQuiz.bind(this);
        this.solveQuiz = this.solveQuiz.bind(this);
    }

    createQuiz() {
        this.setState({selectedTab: 'createQuiz'});
        this.props.onSelection('createQuiz');
    }

    solveQuiz() {
        this.setState({selectedTab: 'solveQuiz'});
        this.props.onSelection('solveQuiz');
    }

    render() {
        return (
            <div className='tab'>
                <button
                    className={this.state.selectedTab === 'createQuiz' ? 'selected' : ''}
                    onClick={() => this.createQuiz()}>
                    Create Quiz
                </button>
                <button
                    className={this.state.selectedTab === 'solveQuiz' ? 'selected' : ''}
                    onClick={() => this.solveQuiz()}>
                    Solve Quiz
                </button>
            </div>
        );
    }
}