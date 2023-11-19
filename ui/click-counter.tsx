'use client';

import React from 'react';

export function ClickCounter() {
  const [count, setCount] = React.useState(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
      className="px-3 py-1 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg whitespace-nowrap tabular-nums hover:bg-gray-500 hover:text-white"
    >
      클라이언트에서 {count}번 클릭
    </button>
  );
}
