import React, { useState, useEffect } from 'react';
import './Screen.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const imageUrls = [
  'https://belleviebiomedicina.com.br/wp-content/uploads/2022/02/bellevie-com-mais-de-quarenta-tratamentos-faciais-e-corporais.jpg',
  'https://cdn.discordapp.com/attachments/1140481525469691924/1151354098654904370/Picsart_23-09-12_23-08-19-573.jpg',
  'https://www.nichodigital.com.br/wp-content/uploads/2020/06/Banner-Donnaliz-Est%C3%A9tica-e-SPA.jpg'
];

function Screen() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const backgroundImageStyles = {
    backgroundImage: `url(${imageUrls[backgroundIndex]})`,
  };

  const openWhatsApp = () => {
    window.open('https://api.whatsapp.com/send?phone=55092981738708', '_blank');
  };

  return (
    <div className="screen" style={backgroundImageStyles}>
      <div className="text">
        <h1>
          <strong className="special-text">Com mais de</strong>
          <br />
          <strong className="special-text">40 tratamentos</strong>
          <br />
          <strong className="special-text">faciais e corporais</strong>
          <br />
          nosso foco é na sua
          <br />
          saúde e no seu
          <br />
          bem-estar!
        </h1>
        <button onClick={openWhatsApp} className="whatsapp-button">
        Agende sua consulta
        <FontAwesomeIcon icon={faWhatsapp} style={{ marginLeft: '5px' }} />
      </button>
      </div>
    </div>
  );
}

export default Screen;
