import React from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

interface ScrollToSectionButtonProps {
  targetSection: string;
  buttonText: string;
}

const ScrollToSectionButton: React.FC<ScrollToSectionButtonProps> = ({ targetSection, buttonText }) => {
    const scrollToSection = () => {
        scroll.scrollTo(parseInt(targetSection), {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };

    return (
        <button onClick={scrollToSection}>
            {buttonText}
        </button>
    );
};

export default ScrollToSectionButton;
