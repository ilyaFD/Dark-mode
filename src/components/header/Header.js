import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../../theme/theme';
import './Header.scss';

const Header = () => {
    const timeRemaining = useSelector((state) => state.time.timeRemaining);
    const { theme, setTheme } = React.useContext(ThemeContext);
    return (
        <div className="header">
            <div className="header__left">
                <div className="candidate">Front-end Test Candidate</div>
                <div className="time-remaining">
                    { timeRemaining }
                    {' '}
                    seconds remaining
                </div>
            </div>
            <button
                onClick={() => setTheme(theme ? '' : 'dark')}
                type="button"
                className="theme-toggle header__right"
            >
                {theme ? 'Light mode 🌞' : 'Dark mode 🌛'}
            </button>
        </div>
    );
};

export default Header;
