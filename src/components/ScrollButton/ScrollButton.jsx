import { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import './ScrollButton.css';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      toggleVisible();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleVisible = () => {
    const windowHeight = window.innerHeight;
    const totalHeight = document.documentElement.scrollHeight;
    const scrolled = window.scrollY;

    if (totalHeight - scrolled <= windowHeight * 1) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="scroll-button" onClick={scrollToTop}>
      <FaArrowCircleUp
        className={`arrow-up-icon ${visible ? 'visible' : ''}`}
      />
    </div>
  );
};

export default ScrollButton;
