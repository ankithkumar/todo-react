import React from 'react';
import '../css/deleteTodo.scss';

export default class DeleteTodo extends React.Component {
    constructor(props) {
        super(props);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    deleteTodo() {
        this.props.onDelete(this.props.todo);
    }

    render() {
        return (
            <div className='deleteButton'>
                <button
                    onClick={() => this.deleteTodo()}>
                    delete
                </button>
            </div>
        )
    }
}