import { TabGroup } from '@/ui/tab-group';
import React from 'react';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '레벨업 Next.js: 스트리밍',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const ids = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }];

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/streaming/"
          items={[
            {
              text: '홈',
            },
            ...ids.map((x) => ({
              text: `제품 ${x.id}`,
              slug: x.id,
            })),
          ]}
        />
      </div>
      <div>{children}</div>
    </div>
  );
}
