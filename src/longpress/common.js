import { useEffect } from 'react';

export default function useCommonLongpress(buttonRef) {
  let timer = null;
  let LONG_PRESS_DELAY = 1000; // ms

  const longpress = (message) => {
    console.log(message);
  };

  useEffect(() => {
    const button = buttonRef.current

    const onKeydown = (e) => {
      console.log('onKeydown');
      if (e.repeat) return;
  
      timer = setTimeout(() => {
        longpress('common long press');
      }, LONG_PRESS_DELAY);
    };
  
    const onKeyup = (e) => {
      console.log('onKeyup');
      clearTimeout(timer);
    };

    button.addEventListener('keydown', onKeydown);
    button.addEventListener('keyup', onKeyup);
    return () => {
      button.removeEventListener('keydown', onKeydown);
      button.removeEventListener('keyup', onKeyup);
    };
  }, []);
}
