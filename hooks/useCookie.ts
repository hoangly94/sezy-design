import React from 'react';

export const useCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length >= 2) {
    const cookie = parts.pop()?.split(';').shift();
    return { cookie };
  }
  const cookie = '';
  return { cookie };
}

export default useCookie;