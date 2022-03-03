import React from 'react';
import { IconIProps, IconWrapper } from '../';

const Plus = (props: IconIProps) => {
    return IconWrapper(undefined, props,
        <svg viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
    )
}

export default Plus
