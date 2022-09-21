// 类型	执行类型	内部调用
// queue	Sync同步的方式	scheduler.schedule(task, delay) scheduler.flush()
// asap	Async(异步微任务)	Promise.resolve().then(() => task)
// async	Async(异步宏任务)	 setInterval,  setTimeout
// animationFrame	Async(异步宏任务?)	 requestAnimationFrame(task)
// When used without delay, it schedules given task synchronously - executes it right when it is scheduled. However when called recursively, that is when inside the scheduled task, another task is scheduled with queue scheduler, instead of executing immediately as well, that task will be put on a queue and wait for current one to finish.

// This means that when you execute task with queue scheduler, you are sure it will end before any other task scheduled with that scheduler will start.
import { asyncScheduler, asapScheduler, queueScheduler, animationFrameScheduler } from 'rxjs';

const log = console.log;

export function schedulers() {
  asyncScheduler.schedule(() => log(1)); // 异步 宏任务
  asapScheduler.schedule(() => log(2)); // 异步 微任务
  queueScheduler.schedule(() => log(3)); // 同步
  queueScheduler.schedule(() => {
    queueScheduler.schedule(() => console.log(4)); // will not happen now, but will be put on a queue
    log(5);
  });
  log(6);
  // animationFrameScheduler.schedule(() => log(7));      // 异步 宏任务?
}

export function animate() {
  const div = document.querySelector('.animate');
  let inscresed = true
  return animationFrameScheduler.schedule(
    function (height) {
      div.style.height = height + 'px';
      if (height >= 400 && inscresed) {
        inscresed = false
      } else if (height <= 0 && !inscresed) {
        inscresed = true
      }
      // which we reschedule with new state
      this.schedule(height + (inscresed ? 1 : -1)); // `this` references currently executing Action,
    },
    0,
    0,
  );
}

// schedulers();
