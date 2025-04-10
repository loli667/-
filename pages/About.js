import React from 'react';
// import myImage from '../images/фон3.jpg';  // Импортируем изображение
import './About.css';  // Импортируем стили для страницы "О сайте"

const About = () => {
  return (
    <div className="about-container">
      <div className="background">
        <img src={myImage} alt="Наш сайт" className="background-image" />
        <h1 className="site-title"></h1>
      </div>
      <div className="content">
        <p>
         "BilimLib" жеке кітапханасыңа қош келдіңіз – кітаптарды сақтап, басқаруға арналған ыңғайлы платформа. 
        </p>
        <p>
        Мұнда сіз кітаптарды кітапханаңызға қосып, оларды жанрына, авторына немесе оқу мәртебесіне қарай сұрыптай аласыз,
        </p>
        <p>
        <p>
        сондай-ақ өзіңіздің жеке жинақтарыңызды жасай аласыз. Біздің сервис сізге қажетті кітаптарды оңай табуға 
        </p>
        <p>
        және оқу барысын бақылауға көмектеседі.
        </p>
        <p>
        Кітаптарыңызды реттеп, сүйікті шығармаларыңызды ыңғайлы форматта оқыңыз!
        </p>

        </p>
      </div>
    </div>
  );
};

export default About;
