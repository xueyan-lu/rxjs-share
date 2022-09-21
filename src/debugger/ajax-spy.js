import { forkJoin } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { tag } from 'rxjs-spy/operators';
import * as spy from 'rxjs-spy';

const spyInst = spy.create();
spyInst.show();
spyInst.log(/user-.+/);
spyInst.log('users');

const names = ['benlesh', 'kwonoj', 'staltz'];
const users = forkJoin(
  ...names.map((name) => ajax.getJSON(`https://api.github.com/users/${name}`).pipe(tag(`user-${name}`))),
).pipe(tag('users'));

users.subscribe();
