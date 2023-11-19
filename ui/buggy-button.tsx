'use client';

import Button from '@/ui/button';
import React from 'react';

export default function BuggyButton() {
  const [clicked, setClicked] = React.useState(false);

  if (clicked) {
    throw new Error('문제가 발생했습니다.');
  }

  return (
    <Button
      kind="error"
      onClick={() => {
        setClicked(true);
      }}
    >
      강제로 에러 발생 시키기
    </Button>
  );
}
