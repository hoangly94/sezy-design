import React from 'react';
import { IconIProps, IconWrapper } from '../';

const Chevron = (props: IconIProps) => {
    const rotateDegMapper = {
        'up': '90',
        'right': '180',
        'down': '-90',
        'left': '0',
    };
    return IconWrapper(rotateDegMapper, props,
        <svg viewBox="0 0 192.701 192.701">
            <path d="M29.641,96.345l74.54-75.61c4.704-4.74,4.704-12.439,0-17.179c-4.704-4.74-12.319-4.74-17.011,0l-82.997,84.2
			c-4.511,4.559-4.535,12.608,0,17.191l83.009,84.2c4.692,4.74,12.319,4.74,17.011,0c4.704-4.74,4.704-12.439,0-17.179
			L29.641,96.345z"/>
            <path d="M113.853,96.345l74.54-75.61c4.704-4.74,4.704-12.439,0-17.179c-4.704-4.74-12.319-4.74-17.011,0l-82.997,84.2
			c-4.511,4.559-4.535,12.608,0,17.191l82.997,84.2c4.704,4.74,12.319,4.74,17.011,0c4.704-4.74,4.704-12.439,0-17.179
			L113.853,96.345z"/>
        </svg>
    )
}
export default Chevron