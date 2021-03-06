import React from 'react';
import ReactDOM from 'react-dom';

// import { HookApp } from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp.js';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './components/02-useEfect/SimpleForm';
// import { FormWithCustomHook } from './components/02-useEfect/FormWithCustomHook';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleUseRef } from './components/04-useRef/RealExampleUseRef';
// import { LayoutEffect } from './components/05-useLayoutEffect/LayoutEffect';
import { Memorize } from './components/06-memos/Memorize';



ReactDOM.render(
  <Memorize />,
  document.getElementById('root')
);
