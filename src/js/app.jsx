import React from 'react';
import List from './list.jsx';
import Insert from './insert.jsx';
import {filter} from 'lodash';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography'
import './../css/appComponent.scss';

export default class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
        this.addTodo = this.addTodo.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    deleteTask(item) {
        let list = [...this.state.list];
        let newList = filter(list, listItem => listItem.name != item.name);
        this.setState({list: newList});
    }

    addTodo(val) {
        const obj = {
            name: val,
            status: 'todo'
        }
        const newArr = [...this.state.list, obj];
        this.setState({list: newArr});
    }

    render() {
        return (
            <div className="container">
                <div>
                    <AppBar color="inherit" position="sticky">
                        <Toolbar>
                            <TypoGraphy color="inherit">
                                <span>Todo App</span>
                            </TypoGraphy>
                        </Toolbar>
                    </AppBar>
                </div>
                <Insert onAddTodo={this.addTodo}/>
                <List listData={this.state.list} deleteTodo={this.deleteTask}/>
            </div>
        );
    }
}