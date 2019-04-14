import React, { Component } from 'react';
import './Social.scss';
import Icon from '../../Common/Icon';

class Social extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.onRedirect = () => {
            window.open(props.data.url);
        };
    }

    render() {
        const { name, icon, nameEng } = this.props.data;

        return (
            <div className='social-item' onClick={this.onRedirect} title={name}>
                <Icon icon={icon} classAdd={'social-item__icon -' + nameEng} />
            </div>
        );
    }
}

export default Social;
