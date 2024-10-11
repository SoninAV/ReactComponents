import checkmarkImage from '../../../img/Checkmark.png';

function CheckmarkBlock({children}) {
    const blockStyle = {
        display: 'inline-flex',
        gap: '30px',
        alignItems: 'center',
        padding: '20px 30px',
        borderRadius: '84px',
        margin: '0 30px 30px 0',
        background: 'linear-gradient(rgba(243, 246, 239, .2), rgba(255, 255, 255, 1))',
        width: 'fit-content'
    };

    const imageStyle = {
        width: '40px',
        height: '40px'
    };

    const textStyle = {
        fontSize: '24px'
    };

    return (
        <div style={blockStyle}>
            <div style={textStyle}>
                {children}
            </div>
            <img src={checkmarkImage} alt="Checkmark" style={imageStyle} />
        </div>
    );
};

export default CheckmarkBlock;