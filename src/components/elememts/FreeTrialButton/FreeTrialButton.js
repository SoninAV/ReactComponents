import styles from './FreeTrialButton.css';

const FreeTrialButton = ({ onClick }) => {
    return (
        <button className='FreeTrialButton' onClick={onClick} style={styles}>
            Попробовать бесплатно
        </button>
    );
};

export default FreeTrialButton;