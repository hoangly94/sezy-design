import * as React from 'react';
import Classnames from 'classnames';
import { IconIProps} from './';
import {Classes}from '../_base';

export default (props: IconIProps) => {
    const {
        type = 'light',
        size = 'm',
        fill,
        classes,
        ...otherProps
    } = props;

    
    const svgProps = {
        style: {
            fill: fill,
        },
        ...otherProps
    }

    return (
        <svg
            viewBox="0 0 515.556 515.556"
            {...svgProps}
        >
            <path d="m257.778 0c-142.137 0-257.778 115.641-257.778 257.778s115.641 257.778 257.778 257.778 257.778-115.641 257.778-257.778-115.642-257.778-257.778-257.778zm-32.222 383.899-103.338-103.338 45.564-45.564 57.774 57.774 122.218-122.218 45.564 45.564s-167.782 167.782-167.782 167.782z" />
        </svg>
    )
}

