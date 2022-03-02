import '../styles/components/Nav.scss';

import DarkModeButton from './DarkModeButton';

const Nav = () => {
    return (
        <nav className='navbar container'>
            <span className='navbar__logo spaced-text'>Adam Pugh</span>
            <DarkModeButton />
        </nav>
    );
};

export default Nav;
