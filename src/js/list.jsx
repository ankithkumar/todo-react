import React from 'react';

export default class List extends React.Component {
    constructor(props) {
        super(props)
    }

    getList() {
        this.props.listData.map((item, index) => {
           return <li key={index}>{item}</li>
         })
    }
    render() {
        return (
            <ul>
                {
                   this.getList()
                }
            </ul>
        )
    }
}
