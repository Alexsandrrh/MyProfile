import React, { Component } from 'react';

class Avatar extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { src, size, round } = this.props.data;
        const styleOption = {
            width: size,
            height: size,
            borderRadius: round,
            cursor: 'pointer'
        };

        return (
            <div className='avatar' style={styleOption}>
                <img className='avatar__img' alt='Тут должна быть фото крутого разработчика' style={styleOption} src={src} />
            </div>
        );
    }
}

export default Avatar;
