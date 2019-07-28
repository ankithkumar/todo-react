import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import Body from './body.jsx';

export default class AppComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'Note Making APP'
        }
        console.log('APP COMPONENT!!!');
    }

    render() {
        return(
            <div className="container">
                <Header headerData={this.state.title} />
                <Body />
                <Footer/>
            </div>
        );
    }
}