import React from 'react';

export const useForceRender = () => {
  return React.useState()[1].bind(null, {} as any);;
}

export default useForceRender;