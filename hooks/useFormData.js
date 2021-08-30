import { useCallback, useRef, useState } from 'react';

export default function useFormData(model) {
  const [data, setData] = useState(() => (model));

  const validity = useRef({});

  const [isValid, setIsValid] = useState(false);

  const onChange = useCallback((type) => (value, isValid) => {
    validity.current[type] = isValid;
    const isReady = !Object.values(validity.current).some(field => field === false);

    if (!isValid) {
      setIsValid(false);
    } else {
      setIsValid(isReady);
    }

    setData(prev => {
      prev[type] = value
      return { ...prev };
    });
  }, []);

  return { data, isValid, onChange }
}
