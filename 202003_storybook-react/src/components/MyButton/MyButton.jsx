import React from 'react';
import './MyButton.scss';

interface Props {
  rounded:boolean;
  onClick: ()=>void;
}

export default function MyButton({ onClick, children, rounded }:Props) {
  let cls = 'my-button';
  if (rounded) {
    cls += ' style-rounded';
  }
  return (
    <button
      className={cls}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
