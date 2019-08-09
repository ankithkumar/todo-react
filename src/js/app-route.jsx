import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import Setup from './setup.jsx';
import CreateQuiz from './create-quiz.jsx';
import SolveQuiz from './solveQuiz.jsx';
import ImageDemo from './image-demo.jsx';
import { Navbar, Nav } from 'react-bootstrap';

export default class AppRouter extends React.Component {
    constructor(props) {
        super(props);
        console.log('appRouter');
    }

    render() {
        return (
            <HashRouter basename="/">
                <div>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">Quiz</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link>
                                    <Link to="/">Home</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/createQuiz/">createQuiz</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/solveQuiz/">solveQuiz</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/images/">images</Link>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Route path="/" exact component={Setup} />
                    <Route
                        path="/createQuiz/"
                        render={(routeProps) => (
                            <CreateQuiz {...routeProps} {...this.props} />
                        )}
                    />
                    <Route
                        path="/solveQuiz/"
                        render={(routeProps) => (
                            <SolveQuiz {...routeProps} {...this.props} />
                        )}
                    />
                    <Route path="/images/" component={ImageDemo} />
                </div>
            </HashRouter>
        );
    }
}
