import { useEffect } from 'react';
import { fromEvent, of } from 'rxjs';
import { switchMap, filter, delay, tap, takeUntil } from 'rxjs/operators';

export default function useRxjsLongpress(buttonRef) {
  let LONG_PRESS_DELAY = 1000; // ms

  const longpress = (message) => {
    console.log(message);
  };

  useEffect(() => {
    const button = buttonRef.current;
    const keydown$ = fromEvent(button, 'keydown');
    const keyup$ = fromEvent(button, 'keyup');

    const subscriptionKeyup = keyup$.subscribe(() => console.log('keyup'));
    const subscriptionKeydown = keydown$
      .pipe(
        tap(() => console.log('keydown')),
        filter((e) => !e.repeat),
        switchMap((e) => {
          return of(e).pipe(delay(LONG_PRESS_DELAY), takeUntil(keyup$));
        }),
      )
      .subscribe((e) => longpress('rxjs long press'));

    return () => {
      subscriptionKeyup.unsubscribe();
      subscriptionKeydown.unsubscribe();
    };
  }, []);
}
