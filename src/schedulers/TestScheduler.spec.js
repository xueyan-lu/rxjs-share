// 用来测试AsyncScheduler，其他异步调度器的测试依赖于测试框架的异步方法
const { TestScheduler } = require('rxjs/testing');
const { throttleTime } = require('rxjs/operators/index.js');

describe('observables', () => {
  let scheduler;
  // let subscriptions;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
    // subscriptions = [];
  });

  afterEach(() => {
    // subscriptions.forEach((subscription) => subscription.unsubscribe());
  });

  // This test will actually run *synchronously*
  it('generate the stream correctly', () => {
    scheduler.run((helpers) => {
      const { cold, hot, expectObservable, expectSubscriptions } = helpers;
      const e1 = cold('  -a--b--c---|');
      const subs1 = '    ^----------!';
      const expected1 = '-a-----c---|';

      expectObservable(e1.pipe(throttleTime(3, scheduler))).toBe(expected1);
      expectSubscriptions(e1.subscriptions).toBe(subs1);

      const e2 = hot('   -a--b--c---|');
      const subs2 = '    --^-----!';
      const expected2 = '----b--c-';

      expectObservable(e2, subs2).toBe(expected2);
    });
  });
});
