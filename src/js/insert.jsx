import React from 'react';
import './../css/insert.scss';

export default class Insert extends React.Component {
    constructor(props) {
        console.log('insertComponent props has ', props);
        super(props);
        this.state = {
            inputValue : ''
        }
    }

    handleChange(evt) {
        this.setState({inputValue: evt.target.value});
    }

    handleSubmit() {
        console.log('value contains ', this.state.inputValue);
        this.props.handleInsert(this.state.inputValue);
        this.setState({inputValue: ''});
    }

    render() {
        return(
            <div className="insert">
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={() => this.handleChange(event)}
                    placeholder="Enter your note title"
                />
                <button onClick={() => this.handleSubmit()}>Submit</button>
            </div>
        )
    }
}