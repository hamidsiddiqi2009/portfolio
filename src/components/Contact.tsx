import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';


const Contact: React.FC = () => {
  const handleLogoClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
      
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ac935mbURiKGpv3zT5hylLNYs7SXyJI7PQ&s"
        alt="Fiverr Logo"
        style={{ cursor: 'pointer' }}
        onClick={() => handleLogoClick('https://www.fiverr.com/hamidsiddiqii/')}
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStM5YoWebwhvCnW_k5ZSw9Io1jXw9PYamdmQ&s"
        alt="PeoplePerHour Logo"
        style={{ cursor: 'pointer' }}
        onClick={() => handleLogoClick('https://www.peopleperhour.com/freelancer/technology-programming/hamid-siddiqi-web-developer-web-designer-video-zznjjqmn')}
      />
    </div>
  );
};

export default Contact;