import { useCallback } from 'react';

const useCostTransform = () => {
  const costTransform = useCallback((precio) => {
    return precio.toLocaleString('es-ES', { style: 'currency', currency: 'ARS' });
  }, []);

  return { costTransform };
};

export default useCostTransform;