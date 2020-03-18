import React from 'react';

import Checkbox from './Checkbox';
import MyButton from './MyButton';
import Switch from './Switch';


export default function App() {
  return (
    <div className="app container">
      <MyButton />
      <Checkbox text="hi" />
      <Switch />
    </div>
  );
}
