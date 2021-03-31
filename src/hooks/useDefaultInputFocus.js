import {useEffect, useRef} from 'react';

export const useDefaultInputFocus = () => {
  const defaultInputRef = useRef()

  useEffect(() => {
    if (defaultInputRef.current) {
      defaultInputRef.current.focus()
    }
  }, [])

  return defaultInputRef
};

