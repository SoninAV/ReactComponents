import React, { useState } from 'react';
import CheckmarkBlock from './components/elememts/CheckmarkBlock/CheckmarkBlock';
import FreeTrialButton from './components/elememts/FreeTrialButton/FreeTrialButton';
import FeedbackForm from './components/blocks/FeedbackForm/FeedbackForm';
import FeaturesSection from './FeaturesSection';
import './index.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='body'>
      <div className='features'>
        <h1 className='features__title'>Возможности Ed Space</h1>
        <p className='features__subtitle'>Поможем перенести корпоративную академию, базу знаний, учебные курсы,
        настроим систему мотивации обучения, круглосуточная поддержка.</p>
        <FeaturesSection />
        <div className='button'>
          <FreeTrialButton onClick={handleOpenModal}/>
          <FeedbackForm isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
      </div>
      <div className='advantages'>
        <h2 className='advantages__title'>Выбирайте Ed Space<br/>
        сегодня и вы получите</h2>
        <CheckmarkBlock>Неограниченное колличество учеников</CheckmarkBlock>
        <CheckmarkBlock>Трансляции</CheckmarkBlock>
        <CheckmarkBlock>Точная статистика</CheckmarkBlock>
        <CheckmarkBlock>Производительную видеосвязь с учениками </CheckmarkBlock>
        <CheckmarkBlock>Продукт с ежемесячной подпиской</CheckmarkBlock>
        <CheckmarkBlock>Лучшая конфиденциальность и защита</CheckmarkBlock>
        <CheckmarkBlock>Готовый шаблон для организации обучения</CheckmarkBlock>
        <CheckmarkBlock>Сообщества</CheckmarkBlock>
        <CheckmarkBlock>Любое количество уроков и учебных программ</CheckmarkBlock>
        <div className='button'>
          <FreeTrialButton onClick={handleOpenModal}/>
          <FeedbackForm isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
      </div>
    </div>
  );
}

export default App;
