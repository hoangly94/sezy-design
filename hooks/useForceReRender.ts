import React from 'react';

export const useForceReRender = () => {
  return React.useState()[1].bind(null, {} as any);
}

export default useForceReRender;