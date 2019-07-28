import React from 'react';
import Insert from './insert.jsx';
import List from './list.jsx';

export default class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
        this.onInsert = this.onInsert.bind(this);
    }

    onInsert(value) {
        console.log('in Body Component ', value);
        this.setState({list: [...this.state.list, value]});
        console.log(this.state.list);
    }

    render() {
        return(
            <div className="body">
                <Insert handleInsert={this.onInsert}/>
                <List listData={this.state.list}/>
                <br/>
            </div>
        )
    }
}