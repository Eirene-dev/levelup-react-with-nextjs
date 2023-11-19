'use client';

import { useCounter } from './counter-context';
import React from 'react';
import { Boundary } from '@/ui/boundary';

const ContextClickCounter = () => {
  const [count, setCount] = useCounter();

  return (
    <Boundary
      labels={['Counter Context [Client Component]']}
      color="blue"
      size="small"
      animateRerendering={false}
    >
      <button
        onClick={() => setCount(count + 1)}
        className="px-3 py-1 text-sm font-medium text-gray-100 bg-gray-700 rounded-lg tabular-nums hover:bg-gray-500 hover:text-white"
      >
        {count} 번 클릭
      </button>
    </Boundary>
  );
};

export const Counter = () => {
  const [count] = useCounter();

  return (
    <Boundary
      labels={['Counter Context [Client Component]']}
      color="blue"
      size="small"
      animateRerendering={false}
    >
      <div className="text-xl font-bold text-black span">
        <span className="tabular-nums">{count}</span> 번 클릭됨
      </div>
    </Boundary>
  );
};

export default ContextClickCounter;
