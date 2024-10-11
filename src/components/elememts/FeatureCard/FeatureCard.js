import './FeatureCard.css';

const FeatureCard = ({ image, title, text }) => {
    return (
        <div className="feature-card">
            <img src={image} alt={title} className="feature-card__image" />
            <h3 className="feature-card__title">{title}</h3>
            <p className="feature-card__text">{text}</p>
        </div>
    );
};

export default FeatureCard;