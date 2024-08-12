import React from 'react';
import { useSelector } from 'react-redux';

export function Output() {
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <h2>Output: {count}</h2>
    </div>
  );
}
