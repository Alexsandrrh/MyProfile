import React, { Component } from 'react';

class Icon extends Component {
    render() {
        const { icon, classAdd } = this.props;
        const classLower = classAdd.toLowerCase();

        return (
            <svg className={classLower + ' icon'}>
                <use xlinkHref={icon} />
            </svg>
        );
    }
}

export default Icon;
