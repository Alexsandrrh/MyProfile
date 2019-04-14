import React, { Component } from 'react';
import './Section.scss';
import ReactHtmlParser from 'react-html-parser';

class Section extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { title, html } = this.props.data;

        return (
            <div className='section-item'>
                <p className='section-item__text'>
                    <h2 className='section-item__title'>{title}</h2>
                    {ReactHtmlParser(html)}
                </p>
            </div>
        );
    }
}

export default Section;
