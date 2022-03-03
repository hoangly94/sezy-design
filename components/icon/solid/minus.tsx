import React from 'react';
import { IconIProps, IconWrapper } from '../';

const User = (props: IconIProps) => {
    return IconWrapper(undefined, props,
        <svg viewBox="0 0 24 24">
            <path d="M18 11h-12c-1.104 0-2 .896-2 2s.896 2 2 2h12c1.104 0 2-.896 2-2s-.896-2-2-2z" />
        </svg>
    )
}

export default User
