import React, { Component } from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import Avatar from '../Avatar/Avatar';
import Socials from '../Socials/Socials';

class Header extends Component {
    render() {
        const { displayName, avatarUrl, bio } = this.props.profile;

        return (
            <header className='header'>
                <div className='container'>
                    <div className='header-left'>
                        <Avatar
                            data={{
                                src: avatarUrl,
                                size: 80,
                                round: '50%'
                            }}
                        />
                        <div className='header-content'>
                            <h2 className='header-content__name'>Привет, я {displayName}</h2>
                            <p className='header-content__bio'>{bio}</p>
                        </div>
                    </div>
                    <div className='header-right'>
                        <Socials />
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = state => {
    return {
        profile: state.main.profile
    };
};

export default connect(mapStateToProps)(Header);
