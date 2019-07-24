import React from "react";
import DeleteTodo from './deletetodo.jsx';
import './../css/list.scss';

export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.renderTable = this.renderTable.bind(this);
        this.showEmptyListMessage = this.showEmptyListMessage.bind(this);
        this.handleOnDelete = this.handleOnDelete.bind(this);
    }

    handleOnDelete(val) {
        this.props.deleteTodo(val);
    }

    showEmptyListMessage() {
        return (
            <h4>There are no todo's</h4>
        );
    }
    renderTable(listData) {
        return (
            <table className="list-table">
                <tbody>
                    <tr>
                        <th>&nbsp;</th>
                        <th>Name</th>
                        <th>Status</th>
                    </tr>
                    {
                        listData.map((data, index) => {
                            return (<tr  key={index}>
                                <td>{index + 1}</td>
                                <td>{data.name}</td>
                                <td>{data.status}</td>
                                <td><DeleteTodo todo={data} onDelete={this.handleOnDelete}/></td>
                            </tr>);
                        })
                    }
                </tbody>
            </table>
        );
    }

    render() {
        return (
            <div className="list">
                { this.props.listData.length ? this.renderTable(this.props.listData) : this.showEmptyListMessage()}
            </div>
        );
    }
}