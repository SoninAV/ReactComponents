import CheckmarkBlock from './components/elememts/CheckmarkBlock/CheckmarkBlock';
import FreeTrialButton from './components/elememts/FreeTrialButton/FreeTrialButton';
import FeaturesSection from './FeaturesSection';
import './index.css';

function App() {
  return (
    <div className='body'>
      <div className='features'>
        <h1 className='features__title'>Возможности Ed Space</h1>
        <p className='features__subtitle'>Поможем перенести корпоративную академию, базу знаний, учебные курсы,
        настроим систему мотивации обучения, круглосуточная поддержка.</p>
        <FeaturesSection />
        <div className='features__button'>
          <FreeTrialButton />
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
      </div>
    </div>
  );
}

export default App;
