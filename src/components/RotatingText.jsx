import '../styles/components/RotatingText.scss';

const RotatingText = ({ text }) => {
    const d = 360 / text.length;
    const textArray = text.split('').map((letter, index) => ({ letter, degree: `rotate(${index * d}deg)` }));

    return (
        <div className='rotatingText'>
            <div className='rotatingText__circle'>
                {textArray.map(({ letter, degree }, i) => (
                    <p className='rotatingText__letter' key={degree} style={{ transform: degree }} id={degree}>
                        {letter}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default RotatingText;
