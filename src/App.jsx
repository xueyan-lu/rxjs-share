import { useEffect, useRef } from 'react';
import useCommonLongpress from './longpress/common';
import useRxjsLongpress from './longpress/rxjs';
import { schedulers, animate } from './schedulers/schedulers';
import './debugger/rxjs-spy';
import './App.css';

// schedulers();

function App() {
  const commonButton = useRef(null);
  const rxjsButton = useRef(null);

  useCommonLongpress(commonButton);
  useRxjsLongpress(rxjsButton);

  // useEffect(() => {
  //   const subscription = animate();
  //   return () => {
  //     subscription.unsubscribe();
  //   }
  // }, []);

  return (
    <div className="App">
      <div className="animate">animate</div>
      <div className="card">
        <button ref={commonButton}>common</button>
        <button ref={rxjsButton}>rxjs</button>
      </div>
    </div>
  );
}

export default App;
