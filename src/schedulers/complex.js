import { Observable, asyncScheduler } from 'rxjs';
import { observeOn, subscribeOn } from 'rxjs/operators/index.js';

const log = console.log;

let obs$ = new Observable((observer) => {
  observer.next(1);
  log(1);

  observer.next(2);
  log(2);

  observer.next(3);
  log(3);
});

log('---------使用subscribeOn-------')
log('before describe1')

let subscription1 = obs$.pipe(subscribeOn(asyncScheduler, 2000)).subscribe({
  next: (v) => log('got value', v),
  complete: () => log('complete'),
});

log('after describe1')
// log('---------使用observeOn-------')
// log('before describe2')

// let subscription2 = obs$.pipe(observeOn(asyncScheduler, 2000)).subscribe({
//   next: (v) => log('got value', v),
//   complete: () => log('complete'),
// });

// log('after describe2')
