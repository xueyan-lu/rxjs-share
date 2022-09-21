import { of, asyncScheduler } from 'rxjs';
import { subscribeOn, observeOn } from 'rxjs/operators/index.js';

const log = console.log;

of(1).subscribe((val) => log(val));
// log('after subscribe1');

log('------添加异步调度1-----');

of(1, asyncScheduler).subscribe((val) => log(val));

log('after subscribe1');
log('------添加异步调度2-----');

of(1)
  .pipe(subscribeOn(asyncScheduler))
  .subscribe((val) => log(val));

log('after subscribe2');
log('------添加异步调度3-----');

of(1)
  .pipe(observeOn(asyncScheduler))
  .subscribe((val) => log(val));

log('after subscribe3');
