import '../styles/components/Nav.scss';

import DarkModeButton from './DarkModeButton';
import FadeIn from './FadeIn';

const Nav = () => {
    return (
        <nav className='navbar container'>
            <FadeIn>
                <span className='navbar__logo spaced-text'>Adam Pugh</span>
            </FadeIn>
            <FadeIn>
                <DarkModeButton />
            </FadeIn>
        </nav>
    );
};

export default Nav;
