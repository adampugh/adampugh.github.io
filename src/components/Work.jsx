import '../styles/components/Work.scss';

import Project from './Project';

const Work = () => {
    return (
        <div id='work'>
            <div className='container'>
                <h2 className='title__h2'>
                    <span className='title__h2__number'>01</span>Work
                </h2>
            </div>

            {/* <div className='green'></div>
            <div className='blue'></div>
            <div className='red'></div> */}
            <Project />
        </div>
    );
};

export default Work;
