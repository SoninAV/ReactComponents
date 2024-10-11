import styles from './FreeTrialButton.css';

const FreeTrialButton = () => {
    const handleClick = () => {
        alert('Вы нажали на кнопку "ПОПРОБОВАТЬ БЕСПЛАТНО"');
    };

    return (
        <button className='FreeTrialButton' onClick={handleClick} style={styles}>
            Попробовать бесплатно
        </button>
    );
};

export default FreeTrialButton;