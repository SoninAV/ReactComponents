import React, { useEffect, useState } from 'react';
import FeatureCard from './components/elememts/FeatureCard/FeatureCard.js';
import featuresData from './features.json';

const FeaturesSection = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        setFeatures(featuresData);
    }, []);

    return (
        <div className="features__blocks">
        {features.map((feature, index) => (
            <FeatureCard
            key={index}
            image={feature.image}
            title={feature.title}
            text={feature.text}
            />
        ))}
        </div>
    );
};

export default FeaturesSection;