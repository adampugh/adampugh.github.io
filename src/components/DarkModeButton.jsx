import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

import '../styles/components/DarkModeButton.scss';

const updateTheme = (isDarkEnabled) => {
    const styles = getComputedStyle(document.body);
    const docEl = document.documentElement;

    const black = styles.getPropertyValue('--black');
    const white = styles.getPropertyValue('--white');

    if (isDarkEnabled) {
        docEl.style.setProperty('--background', black);
        docEl.style.setProperty('--foreground', white);
    } else {
        docEl.style.setProperty('--background', white);
        docEl.style.setProperty('--foreground', black);
    }
};

const DarkModeButton = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    useEffect(() => {
        updateTheme(isEnabled);
    }, [isEnabled]);

    const toggleState = () => setIsEnabled((prevState) => !prevState);

    return (
        <label className='toggle-wrapper' htmlFor='toggle'>
            <div className={`toggle ${isEnabled ? 'enabled' : 'disabled'}`}>
                <span className='hidden'>{isEnabled ? 'Enable Light Mode' : 'Enable Dark Mode'}</span>
                <div className='icons'>
                    <FontAwesomeIcon icon={faSun} />
                    <FontAwesomeIcon icon={faMoon} />
                </div>
                <input id='toggle' name='toggle' type='checkbox' checked={isEnabled} onClick={toggleState} readOnly />
            </div>
        </label>
    );
};

export default DarkModeButton;
