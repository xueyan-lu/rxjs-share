// 同步执行
// 通过delay延迟将所有的action放入队列排队执行
// 需要手动执行 使用flush()
import { VirtualTimeScheduler, VirtualAction } from 'rxjs';

const log = console.log;

const myScheduler = new VirtualTimeScheduler(VirtualAction);
const start = Date.now();

myScheduler.schedule((v) => log(v), 1000, 1);
myScheduler.schedule((v) => log(v), 500, 2);
myScheduler.flush();
myScheduler.schedule((v) => log(v), 2000, 3);
myScheduler.flush();
log(4);

log(`VirtualTimeScheduler: ${myScheduler.now()}ms`); // 虚拟时钟
log(`Execution: ${Date.now() - start}ms`); // 程序执行时间
