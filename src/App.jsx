import React, { Component, Fragment } from 'react';
import Header from './components/Header/Header';
import Sections from './components/Sections/Sections';

class App extends Component {
    componentDidMount() {
        document.title = 'Я Front-end Developer';
    }

    render() {
        return (
            <Fragment>
                <Header />
                <main>
                    <Sections />
                </main>
            </Fragment>
        );
    }
}

export default App;
