import { Observable, interval } from 'rxjs';
import * as rxjsOperators from 'rxjs/operators';
import * as spy from 'rxjs-spy';
import { tag } from 'rxjs-spy/operators';

window.rxjsOperators = rxjsOperators;
spy.create();

const { map } = rxjsOperators;
const interval$ = interval(2000).pipe(tag('interval'));

interval$
  .pipe(
    map((value) => {
      const names = ['alice', 'bob'];
      return names[value % names.length];
    }),
    tag('people'),
  )
  .subscribe();
