import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Socials.scss';
import Social from './Social/Social';

class Socials extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const Socials = this.props.socials.map((item, index) => {
            return <Social key={index} data={item} />;
        });

        return <div className='social-list'>{Socials}</div>;
    }
}

const mapStateToProps = state => {
    return {
        socials: state.main.socials
    };
};

export default connect(mapStateToProps)(Socials);
