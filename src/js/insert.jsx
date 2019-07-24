import React from 'react';
import './../css/insert.scss';

export default class Insert extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        }
        this.isSubmitted = this.isSubmitted.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        if (e.keyCode == 13 && !e.target.value && e.target.value != '') {
            return;
        }
       this.setState({inputText: e.target.value});
    }

    isSubmitted(e) {
        if (e.keyCode == 13 && e.target.value && e.target.value != '') {
            this.props.onAddTodo(this.state.inputText);
            this.setState({inputText:''});
        }
    }

    render() {
        return (
            <div className="todo_form">
                <input
                    type="text"
                    value={this.state.inputText}
                    onChange={() => this.handleChange(event)}
                    onKeyDown={() => this.isSubmitted(event)}
                    placeholder="please enter your todo"/>
            </div>
        )
    }
}