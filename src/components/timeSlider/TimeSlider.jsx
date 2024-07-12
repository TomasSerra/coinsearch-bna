import { useState, useEffect } from 'react';
import './TimeSlider.scss';

function TimeSlider({maxTime, time, sliderColor}) {
    return (
        <div className='slider'>
        <div className='input' style={{width: `${time*100/maxTime}%`, backgroundColor: sliderColor}}></div>
        </div>
    );
}

export default TimeSlider;