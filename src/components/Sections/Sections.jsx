import React, { Component } from 'react';
import { connect } from 'react-redux';
import Section from './Section/Section';

class Sections extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const Sections = this.props.sections.map((item, index) => {
            return <Section key={index} data={item} />;
        });

        return (
            <div className='sections-catalog'>
                <div className='container'>{Sections}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        sections: state.main.sections
    };
};

export default connect(mapStateToProps)(Sections);
