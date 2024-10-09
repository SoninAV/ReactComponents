
import CheckmarkBlock from './components/elememts/CheckmarkBlock/CheckmarkBlock';

function App() {
  const blockStyle = {
    padding: '50px',
    height: '100vh',
    backgroundColor: 'black'
  };  
  return (
    <div style={blockStyle}>
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
  );
}

export default App;
